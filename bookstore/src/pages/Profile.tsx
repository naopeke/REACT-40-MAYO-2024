// import { useRef } from "react";
import { useForm  } from "react-hook-form";
import Input from "../components/ui/Input";

type FormValues = {
  name: string;
  last_name: string;
  email: string;
  photo: string
}


function Profile() {

  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode:'onChange'
  });

  const { errors, isValid } = formState;
  console.log(errors);

  function onSubmit (data: FormValues){
    console.log(data);
  }


  return (
    <div className="flex items-center justify-center min-h-screen">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <Input label="Nombre*" type="text" placeholder="Jane"
          {...register('name', {
              required:{value: true, message: 'Nombre obligatorio'},
              maxLength: {value: 10, message: 'Maximo 10 caracteres'},
              minLength: {value: 3, message: 'Minimo 3 caracteres'},
              })} 
          />
        </div>

        <div className="md:flex md:items-center mb-6">
            <Input label="Apellido*" type="text" placeholder="Doe"
            {...register('last_name', {
              required:{value: true, message: 'Nombre obligatorio'},
              maxLength: {value: 10, message: 'Maximo 10 caracteres'},
              minLength: {value: 3, message: 'Minimo 3 caracteres'},
            })}
          />
        </div>

        <div className="md:flex md:items-center mb-6">
          <Input label="Email*" type="email" placeholder="jane@example.com"
           {...register('email', {
            required:{value: true, message: 'Nombre obligatorio'},
            minLength: {value: 3, message: 'Minimo 3 caracteres'},
            pattern: {value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: 'Email no valido'},
            })}
          />
        </div>

        <div className="md:flex md:items-center mb-6">
          <Input label="Foto" type="text" placeholder="https://photo.com/photo.jpg" />
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button disabled={!isValid} className="disabled:cursor-not-allowed disabled:opacity-55 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Actualizar Datos
            </button>
          </div>
        </div>
  </form>
    
    
    </div>
  )
}

export default Profile