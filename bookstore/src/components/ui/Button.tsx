import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {

  const { children, className, ...rest } = props;
  
  return (
    <button 
      className={`bg-teal-300 px-3 py-3 rounded text-xl hover:bg-teal-400 active:bg-teal-200 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button;