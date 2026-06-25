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
