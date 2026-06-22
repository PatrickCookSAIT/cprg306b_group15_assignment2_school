import type { Student } from "../lib/students";

type StudentProps = {
  student: Student
};
const StudentCard = ({student} : StudentProps) => {
    return(
        <div className="bg-white border border-blue-200 rounded-xl p-5 shadow-sm flex flex-col gap-3">
            <h2 className = "text-base font-semibold text-blue-400 flex-1"> {student.firstName} {student.lastName}</h2>
            <p>Date of birth: {student.dob}</p>
            <p>Current Grade: <span className={`font-bold ${
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
    );
};

export default StudentCard;