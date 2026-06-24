'use client'
import {useState} from "react"
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import {studentRegistrationSchema, type StudentRegistrationData, studentFields} from "../lib/schema"
import {addStudent} from "../lib/actions"
import FormField from "../components/FormField"


const inputClassStyle = 'text-center w-50 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900' 
+ "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"

const StudentForm = () => {

    const [submittedStudent, setSubmittedStudent] =
    useState<StudentRegistrationData | null>(null);

    const {register, handleSubmit, trigger, reset, formState: {errors, isSubmitting, isSubmitSuccessful}} 
    = useForm<StudentRegistrationData>({
        resolver:zodResolver(studentRegistrationSchema),
        defaultValues:{
            firstName: "",
            lastName:"",
            dob:"2000-01-01",
            currentGrade:""
        }
    });
    
    //call addStudent and add or error out transaction
    async function onSubmit(data: StudentRegistrationData){
    const result = await addStudent(data);
    if (result.success) {
        setSubmittedStudent(data);
    } else {
        console.error(result.error);
    }
}

    if(isSubmitSuccessful && submittedStudent){
        return(
            <main className="max w-xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            <span className=" font-semibold text-blue-400">{submittedStudent.firstName} {submittedStudent.lastName} </span>
           has been registered!</h2>
          <div className=" flex items-center mt-2">
            <button type="button" onClick={()=>{setSubmittedStudent(null); reset();}} className=" m-auto w-100 bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white
               hover:bg-sky-700 disabled:opacity-50 rounded-lg">
                Register Another Student
               </button>
            </div>
        </main>
        )
    }
    return (
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
            <div className="flex m-auto border-b border-sky-200">
                <h2 className="text-base font-semibold text-blue-400">Register a New Student</h2>
            </div>
            <div className="flex flex-row justify-around mx-100">
            <FormField label="First Name" error={errors.firstName?.message} required>
                <input className={inputClassStyle} {...register("firstName")}/>

            </FormField>

            <FormField label="Last Name" error={errors.lastName?.message} required>
                <input className={inputClassStyle} {...register("lastName")}/>

            </FormField>
            </div>

            <div className="flex flex-row justify-around mx-100">
            <FormField label="Date of birth" error={errors.dob?.message} required >
                <input type="date" className={inputClassStyle} {...register("dob")}/>

            </FormField>

            <FormField  label="Student's current grade" error={errors.currentGrade?.message}>
                <select className={inputClassStyle} {...register("currentGrade")}>
                <option value =''>Select a letter grade ...</option>
                <option value ='A+'>A+</option>
                <option value ='A'>A</option>
                <option value ='A-'>A-</option>
                <option value ='B+'>B+</option>
                <option value ='B'>B</option>
                <option value ='B-'>B-</option>
                <option value ='C+'>C+</option>
                <option value ='C'>C</option>
                <option value ='C-'>C-</option>
                <option value ='D+'>D+</option>
                <option value ='D'>D</option>
                <option value ='F'>F</option>
                </select>

            </FormField>
            </div>
            <div className=" flex items-center">
            <button type="submit" disabled={isSubmitting} className=" m-auto w-100 bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white
               hover:bg-sky-700 disabled:opacity-50 rounded-lg">
                {isSubmitting ? "registering..." : "Register"}
               </button>
            </div>
         </form>
    )
}

export default StudentForm;
