'use client'
import {useState} from "react"
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import {studentRegistrationSchema, type StudentRegistrationData, studentFields} from "../lib/schema"

import FormField from "../components/FormField"


const inputClassStyle = 'text-center w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900' 
+ "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"

const StudentForm = () => {
    const {register, handleSubmit, trigger, formState: {errors, isSubmitting, isSubmitSuccessful}} 
    = useForm<StudentRegistrationData>({
        resolver:zodResolver(studentRegistrationSchema),
        defaultValues:{
            firstName: "",
            lastName:"",
            dob:"1900/01/01",
            currentGrade:"N/A"
        }
    });

    async function onSubmit(data: StudentRegistrationData){
        await new Promise ((resolve=> setTimeout(resolve,1000)))
    }

    if(isSubmitSuccessful){
        return(
            <main className="max w-xl mx-auto px-6 py-16 text-center">
          <div className="text-5xl mb-4">
🎉
          </div>
          <h2 className="text-2xl font-bold text-slate-900">You are registered</h2>
          <p className="text-slate-500">Check your @sait.ca inbox for a confirmation email</p>
        </main>
        )
    }
    return (
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
            <div className="flex m-auto border-b">
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
            <FormField label="Date of birth" error={errors.dob?.message} required hint="Format of YYYY/MM/DD">
                <input className={inputClassStyle} {...register("dob")}/>

            </FormField>

            <FormField label="Student's current grade" error={errors.currentGrade?.message}>
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
            <button type="submit" disabled={isSubmitting} className="bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white
               hover:bg-sky-700 disabled:opacity-50 rounded-lg">
                {isSubmitting ? "registering" : "Register"}
               </button>
         </form>
    )
}

export default StudentForm;