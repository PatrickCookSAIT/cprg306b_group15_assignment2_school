"use server";

import { revalidatePath } from "next/cache";
import {
  studentRegistrationSchema,
  type StudentRegistrationData,
} from "./schema";
import { getAllStudents, saveAllStudents, type Student } from "./students";

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
  students.push(newStudent);
  await saveAllStudents(students);

  // Refresh student list page
  revalidatePath("/");

  return { success: true as const, student: newStudent };
}
