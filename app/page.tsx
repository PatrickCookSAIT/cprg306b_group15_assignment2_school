

import Image from "next/image";
import { getAllStudents } from "@/lib/students";
import StudentCard from '@/components/StudentCard'
import StudentForm from '@/components/StudentForm'

const Home = async () => {
  const students = await getAllStudents()
  return (
    <>
    <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((student)=>(
        <StudentCard key={student.id} student={student}/>
      ))}

    </div>

    <StudentForm/>
    </>
  )
}

export default Home