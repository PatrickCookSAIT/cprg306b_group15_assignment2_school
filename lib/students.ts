/*
 * Authors: Ash Burn, Patrick Cook
 * Date: June 24th, 2026
 * Program: Student data access
 *
 * Description: Defines the Student type and the functions for read and write for students.
 * This program manipulates an Array of all the Students and adds to it when the user adds a new student.
 *
 * getAllStudents returns all Students in the array.
 * getStudentById processes the array with an input of a student ID
 * and returns the corresponding Student.
 * saveAllStudents writes to the array.
 */

export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  currentGrade?: string;
};

let students: Student[] = [
  { id: "1", firstName: "Sean", lastName: "Connery", dob: "1930-08-25", currentGrade: "A" },
  { id: "2", firstName: "Roger", lastName: "Moore", dob: "1927-10-14", currentGrade: "B-" },
  { id: "3", firstName: "Timothy", lastName: "Dalton", dob: "1946-03-21", currentGrade: "C+" },
  { id: "4", firstName: "Pierce", lastName: "Brosnan", dob: "1953-05-16", currentGrade: "A+" },
  { id: "5", firstName: "Daniel", lastName: "Craig", dob: "1968-03-02", currentGrade: "B+" },
];

// Return all students
export async function getAllStudents(): Promise<Student[]> {
  return students;
}

// Find one student by id
export async function getStudentById(id: string): Promise<Student | undefined> {
  return students.find((s) => s.id === id);
}

// Add a student to the in-memory list
export async function saveAllStudents(updated: Student[]): Promise<void> {
  students = updated;
}
