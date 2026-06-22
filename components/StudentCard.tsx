import type { Student } from "../lib/students";

type StudentProps = {
  student: Student
};
const StudentCard = ({student} : StudentProps) => {
    return(
        <div className="bg-white border border-blue-200 rounded-xl p-5 shadow-sm-flex flex-col gap3">
            <h2 className = "text-base fond-semibold text-blue-400 flex-1"> {student.firstName} {student.lastName}</h2>
            <p>Date of birth: {student.dob}</p>
            <p>Current Grade: <span>{student.currentGrade}</span></p>
        </div>
    );
};

export default StudentCard;