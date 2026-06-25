/*
 * Authors: Ash Burn, Patrick Cook
 * Date: June 24th, 2026
 * Program: 
 *
 * Description: 
 */

import type { Student } from "../lib/students";

type StudentProps = {
  student: Student
};
const StudentCard = ({student} : StudentProps) => {
    return(
        <>
            {/*display for larger screens. meant for web app.*/}
            {/* displays all data and headers as well as name, date of birth and grade*/}
            <div className="hidden sm:block bg-white border border-blue-200 rounded-xl  shadow-sm flex-col">
                <span className="flex justify-center border-b border-blue-200  w-full">
                    <h2 className = "text-base font-semibold text-blue-400"> {student.firstName} {student.lastName}</h2>
                </span>
                <p className = "ml-2 text-sm text-slate-400">Date of birth: {student.dob}</p>
                {/*display letter grade in colour scheme, green to red from A to F*/}
                <p className = "text-sm ml-2">Current Grade: <span className={`font-bold ${
                    student.currentGrade?.includes("A")
                    ? "text-green-600"
                    : student.currentGrade?.includes("B")
                    ? "text-green-300"
                    : student.currentGrade?.includes("C")
                    ? "text-yellow-300"
                    : student.currentGrade?.includes("D")
                    ? "text-orange-400"
                    : student.currentGrade?.includes("F")
                    ? "text-red-500"
                    : "text-black"
                }`}>
                    {student.currentGrade}
                </span>
            
                </p>
            </div>
            {/*display for mobile and smaller screens*/}
            {/*displays as First and Last initial with current grade in a circle card*/}
            <div className="block sm:hidden flex-col text-center border-blue-200 bg-white border rounded-full w-15 h-15 ">
                <h2 className = "text-2xl font-semibold text-blue-400 p-[2px]"> {student.firstName[0]}.{student.lastName[0]}</h2>
                {/*display letter grade in colour scheme, green to red from A to F*/}
                <span className={`font-bold  ${
                    student.currentGrade?.includes("A")
                    ? "text-green-600"
                    : student.currentGrade?.includes("B")
                    ? "text-green-300"
                    : student.currentGrade?.includes("C")
                    ? "text-yellow-300"
                    : student.currentGrade?.includes("D")
                    ? "text-orange-400"
                    : student.currentGrade?.includes("F")
                    ? "text-red-500"
                    : "text-black"
                }`}>
                    {student.currentGrade}
                </span>
                
            </div>
        </>
    );
};

export default StudentCard;
