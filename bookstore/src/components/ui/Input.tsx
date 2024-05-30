import { useId, forwardRef } from "react";

type InputProps = {
  label?: string;
  type: string;
  error?: string;
  className?: string;
  labelClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props: InputProps, ref) {

  const { label, type, error, className, labelClassName, ...resto } = props;

  const inputId = useId();
  
  return (
    <>
    <div className="md:w-1/3">
      {label && <label className={`block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 ${labelClassName}`} htmlFor={inputId}>{label}</label>} 
    </div>
        <div className="md:w-2/3">
          <input
            ref={ref}
            id={inputId}
            className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${className}`}
            type={type || 'text'}
            {...resto}
          />
          {error && <span className="absolute top-full left-0 text-red-400 text-sm">{error}</span>}
        </div>
      </>
  )
})

export default Input;