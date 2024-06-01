//rfce
import { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';

function Login() {

  // useContext(UserContext)を使用した場合
  //const { logIn } = useContext(UserContext);

  //useUserを使用した場合
  const { logIn } = useUser();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [touchedInputs, setTouchedInputs] = useState({
    email: false,
    password: false,
  })

  
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    const checkErrors = {
      email: '',
      password: ''
    }
    if (name === 'email' && !value) checkErrors.email = 'Email requerido';
    if (name === 'password' && !value) checkErrors.password = 'Contraseña requerido';

    setErrors(checkErrors);
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const resp = await axios.post('http://localhost:3000/login', formValues);
      logIn(resp.data); //login関数の使用
      navigate('/books');
 
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 
              ref={inputRef}
              name="email" 
              value={formValues.email} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              placeholder="email"
              onBlur={() => setTouchedInputs({ ...touchedInputs, email: true})}
              />
              {errors.email && touchedInputs.email && <span className="text-red-400 block">{errors.email}</span>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input 
              name="password" 
              value={formValues.password} 
              onChange={handleInputChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="********"
              onBlur={() => setTouchedInputs({ ...touchedInputs, password: true})}
              />
              {errors.password && touchedInputs.password && <span className="text-red-400 block">{errors.password}</span>}   
            
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
            <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              No tienes la cuenta?
            </Link>
          </div>
          {/* <pre style={{fontSize:'2rem'}}>
            {JSON.stringify(formValues, null, 3)}
          </pre> */}
        </form>
      </div>
    </div>
  )
}

export default Login