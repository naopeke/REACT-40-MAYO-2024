// import { useRef } from "react";
import { useForm  } from "react-hook-form";
import Input from "../components/ui/Input";
import Heading from "../components/ui/Heading"
// import { DevTool } from '@hookform/devtools';
import { useUser } from '../contexts/UserProvider';
import axios from "axios";

type FormValues = {
  name: string;
  last_name: string;
  email: string;
  photo: string
}


function Profile() {

  const { user } = useUser();

  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode:'onChange',
    defaultValues: user ? user : {} //defaultValues にログインユーザーの情報が存在する場合にのみその値を設定するようにします。具体的には、三項演算子を使用して、user が存在する場合はその値を、存在しない場合は空のオブジェクト {} を渡すようにします。
  });

  const { errors, isValid } = formState;
  console.log(errors);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post('http://localhost:3000/profile', data);
      console.log(response.data);

    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <Heading className="text-center mb-12" title="Perfil" />
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <Input id="name" label="Nombre*" type="text" placeholder="Jane"
          {...register('name', {
              required:{value: true, message: 'Nombre obligatorio'},
              maxLength: {value: 10, message: 'Maximo 10 caracteres'},
              minLength: {value: 3, message: 'Minimo 3 caracteres'},
              })} 
          />
        </div>

        <div className="md:flex md:items-center mb-6">
            <Input id="last_name" label="Apellido*" type="text" placeholder="Doe"
            {...register('last_name', {
              required:{value: true, message: 'Nombre obligatorio'},
              maxLength: {value: 10, message: 'Maximo 10 caracteres'},
              minLength: {value: 3, message: 'Minimo 3 caracteres'},
            })}
          />
        </div>

        <div className="md:flex md:items-center mb-6">
          <Input id="email" label="Email*" type="email" placeholder="jane@example.com"
           {...register('email', {
            required:{value: true, message: 'Nombre obligatorio'},
            minLength: {value: 3, message: 'Minimo 3 caracteres'},
            pattern: {value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: 'Email no valido'},
            })}
          />
        </div>

        <div className="md:flex md:items-center mb-6">
          <Input id="email" label="Foto" type="text" placeholder="https://photo.com/photo.jpg" />
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button disabled={!isValid} className="disabled:cursor-not-allowed disabled:opacity-55 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Actualizar
            </button>
          </div>
        </div>
  </form>
    
    
    </div>
  )
}

export default Profile