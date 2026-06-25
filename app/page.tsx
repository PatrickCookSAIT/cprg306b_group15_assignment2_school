/*
 * Authors: Ash Burn, Patrick Cook
 * Date: June 24th, 2026
 * Program: Main Page
 *
 * Description: This is the main page for the school webpage portal, rendered as a server component. 
 * When loaded, it reads the student records from students.ts via getAllStudents. Students are processed
 * through StudentCard for display. Renders StudentForm which lets the user add a student through a form. 
 * The output is a grid of Student Cards with details and a registration form for new students. 
 */

import { getAllStudents } from "@/lib/students";
import StudentCard from '@/components/StudentCard'
import StudentForm from '@/components/StudentForm'

const Home = async () => {
  const students = await getAllStudents()
  return (
    <>
    {/*map through all student data and display the data using StudentCard component */}
    <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((student)=>(
        <StudentCard key={student.id} student={student}/>
      ))}

    </div>
      {/*load StudentForm component */}
    <StudentForm/>
    </>
  )
}

export default Home
