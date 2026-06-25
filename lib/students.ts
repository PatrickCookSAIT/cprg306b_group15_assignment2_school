/*
 * Authors: Ash Burn, Patrick Cook
 * Date: June 24th, 2026
 * Program: Student data access
 *
 * Description: Defines the Student type and the functions for read and write for students.
 * This program manipulates the students.json file which is used for storage of data.
 *
 * getAllStudents returns all Students in an array.
 * getStudentById proccesses the array with an input of a student ID
 * and returns the corresponding Student.
 * saveAllStudents writes the array to the file.
 *
 */

import { promises as fs } from "fs";
import path from "path";

export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  currentGrade?: string;
};

const dataFilePath = path.join(process.cwd(), "lib", "students.json");

// Grab from JSON
export async function getAllStudents(): Promise<Student[]> {
  return JSON.parse(await fs.readFile(dataFilePath, "utf-8"));
}

//Get student by ID
export async function getStudentById(id: string): Promise<Student | undefined> {
  const students = await getAllStudents();
  return students.find((s) => s.id === id);
}

//Save
export async function saveAllStudents(students: Student[]): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(students, null, 2));
}
