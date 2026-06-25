type FormFieldProps = {
    label: string;
    error?: string;
    hint?: string;
    required?: boolean;
    children: React.ReactNode
}

//set form field formatting for labels, hints, errors and required star
const FormField = ({label, error, hint, required= false, children}:FormFieldProps) => {
  return (
    <div className="flex items-center flex-col gap-1.5">
      <label className="font-semibold text-slate-700 text-sm">{label}
        {/*style is optional, only there if required is true */}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {/* checking if we have a hint and don't have an error so they don't overlap each other */}
      {hint && !error && <p className="text-slate-400 text-xs">{hint}</p>}
      {/* role='alert' tells screen reader that there is an alert */}
      {error && (
        <p className="text-red-500 text-sm flex items-center gap-1" role='alert'>{error}</p>
      )}
    </div>
  )
}

export default FormField
