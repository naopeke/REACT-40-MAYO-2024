//rfce
import { useState, useRef } from 'react';
import axios from 'axios';

function Login() {

  const [emailValue, setEmailValue] = useState(''); 
  const [passwordValue, setPasswordValue] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  
  const inputRef = useRef<null | HTMLInputElement>(null);


  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>){
    // console.log(event.target.value)
    const {name, value} = event.target;
    setEmailValue(value);

    // setEmailValue(event.target.value);
    inputRef.current?.focus();

    const checkErrors = {...errors}; // 既存のエラーを維持

    if (name === 'email' && !value) checkErrors.email = 'Email requerido';
    setErrors(checkErrors);
  } 

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>){
    setPasswordValue(event.target.value);

    const {name, value} =event.target;
    setPasswordValue(value);

    inputRef.current?.focus();

    const checkErrors = {...errors};

    if (name === 'password' && !value) checkErrors.password = ''
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await axios.post('/login', {
        email: emailValue,
        password: passwordValue,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  // const inputStyles = {
  //   outline: passwordValue.length <8 ? '4px solid crimson': 'none'
  // }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 
            // style={inputStyles} 
            ref={inputRef}
         name="email" value={emailValue} onChange={handleEmailChange}className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input name="password" value={passwordValue} onChange={handlePasswordChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" required/>
            
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
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