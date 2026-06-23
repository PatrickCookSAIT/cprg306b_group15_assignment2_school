import {z} from 'zod'

export const studentRegistrationSchema = z.object({
    firstName: z.string().min(1, "Please enter a minimum of 1 character for your first name."),
    lastName: z.string().min(1, "Please enter a minimum of 1 character for your last name."),
    dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/,
  "Please select a valid date"),
    currentGrade: z.string().optional()
})

export type StudentRegistrationData = z.infer<typeof studentRegistrationSchema>

export const studentFields = [ 'firstName', 'lastName', 'dob', 'currentGrade'] as const;