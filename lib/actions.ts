/*
 * Authors: Ash Burn, Patrick Cook
 * Date: June 24th, 2026
 * Program: Student data manipulation, server actions
 *
 * Description:
 * Server side actions for managing the data of students. These run on the server so that they
 * may read and write files. The input is validated form data for a new student. The data is re
 * validated on this side with the Zod schema. Loads the current list, assigns a new id based
 * on length of list, appends the new student. Outputs to students.ts and sends a result on whether
 * the save succeeded.
 */

"use server";

import { revalidatePath } from "next/cache";
import {
  studentRegistrationSchema,
  type StudentRegistrationData,
} from "./schema";
import { getAllStudents, saveAllStudents,  type Student } from "./students";

//adds a new student
export async function addStudent(data: StudentRegistrationData) {
  //Validate on server
  const parsed = studentRegistrationSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false as const, error: "Validation failed" };
  }

  //load list
  const students = await getAllStudents();

  // New ID
  const nextID = String(students.length + 1);

  // Build/save new student
  const newStudent: Student = { id: nextID, ...parsed.data };
  //students.push(newStudent);
  //await saveAllStudents(students);

  // Refresh student list page
  revalidatePath("/");

  return { success: true as const, student: newStudent };
}
