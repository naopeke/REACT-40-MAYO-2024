import { useState, useRef } from "react";
import Input from "../components/ui/Input";

function Register() {

  const [formValues, setFormValues] = useState({
    name: '',
    last_name: '',
    email: '',
    photo: '',
    password: '',
    confirm_password: ''
  });

  const [errors, setErrors] = useState({
    name:'',
    last_name:'',
    email: '',
    photo: '',
    password: ''});
  
    const [touchedInputs, setTouchedInputs] = useState({
      name: false,
      last_name: false,
      email: false,
      photo: false,
      password: false,
      confirm_password: false
    })

  const inputRef = useRef<null | HTMLInputElement>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    const checkErrors = {
      name:'',
      last_name:'',
      email: '',
      photo: '',
      password: '',
      confirm_password: ''
    }

    if (name === 'name' && !value) checkErrors.name = 'Nombre requerido';
    if (name === 'email' && !value) checkErrors.email = 'Email requerido';

    const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if (name === 'email' && value.length > 3 && !emailRegex.test(value)) checkErrors.email = 'Email invalido';


    setErrors({...errors, ...checkErrors });
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(formValues);

    setFormValues({
      name: '',
      last_name: '',
      email: '',
      photo: '',
      password: '',
      confirm_password: ''
    });
    inputRef.current?.focus();
  }


  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <Input 
            label="Nombre*" 
            type="text" 
            placeholder="Jane" 
            value={formValues.name} 
            onChange={handleInputChange}
            onBlur = {() => setTouchedInputs({...touchedInputs, name: true})}
            name="name"          
          />
          {/* <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Nombre
            </label>
          </div>
          <div className="md:w-2/3">
            <input ref={inputRef} name="name" value={formValues.name} onChange={handleInputChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane"/>
          </div> */}
        </div>

        <div className="md:flex md:items-center mb-6">
          <Input
            label="Apellido*"
            type="text"
            placeholder="Doe"
            value={formValues.last_name}
            onChange={handleInputChange}
            onBlur={() => setTouchedInputs({ ...touchedInputs, last_name: true})}
            name="last_name"
      />
        </div>

        <div className="md:flex md:items-center mb-6">
            <Input          
              label="Email*"
              type="text"
              placeholder="jane@example.com"
              value={formValues.email}
              onChange={handleInputChange}
              onBlur={() => setTouchedInputs({ ...touchedInputs, email: true})}
              name="email"
            />
        </div>

        <div className="md:flex md:items-center mb-6">
          <Input
              label="Foto"
              type="text"
              placeholder="https://photo.com/photo.jpg"
              value={formValues.photo}
              onChange={handleInputChange}
              onBlur={() => setTouchedInputs({ ...touchedInputs, photo: true})}
              name="photo"
              />
        </div>

        <div className="md:flex md:items-center mb-6">
        <Input
              label="Password*"
              type="password"
              placeholder="******"
              value={formValues.password}
              onChange={handleInputChange}
              onBlur={() => setTouchedInputs({ ...touchedInputs, password: true})}
              name="password"
              />
          {/* <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input pattern="[a-zA-Z0-9]{3,10}" minLength={6} ref={inputRef} name="password" value={formValues.password} onChange={handleInputChange} className=" peer invalid:bg-red-300 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="1234" />
            <p className="hidden peer-invalid:block text-red-400">Campo obligatorio</p>
          </div> */}
        </div>

        <div className="md:flex md:items-center mb-6">
        <Input
              label="Password*"
              type="password"
              placeholder="******"
              value={formValues.confirm_password}
              onChange={handleInputChange}
              onBlur={() => setTouchedInputs({ ...touchedInputs, confirm_password: true})}
              name="confirm_password"
              />
          {/* <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input ref={inputRef} name="password" value={formValues.password} onChange={handleInputChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="1234" />
          </div> */}
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Sign Up
            </button>
          </div>
        </div>
  </form>
    
    
    </div>
  )
}

export default Register