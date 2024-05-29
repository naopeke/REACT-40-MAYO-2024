// import useState from 'react'

// function ValidationManual() {

//     const [formValues, setFormValues] = useState({name:'', email:''});
//     const [errors, setErrors] = useState({name:'', email:''})

//     function handleFormChange(event: React.ChangeEvent<HTMLInputElement>){
//             const {name, value} = event.target;

//             const checkErrors = { name: '', email:''};
//         if(name === 'name' && !value) checkErrors.name = 'Nombre required';
//         if(name ==='name' && value.length < 8) checkErrors.name = 'Minimim 8 characters';
//         if(name === 'email' && !value) checkErrors.email = 'Email required';

//         const emailRegex = ^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$;
//         if (name==='email' && !emailRegex.test(value)) checkErrors.email = 'Email invalid';
//         setErrors({...errors, ...checkErrors});
//         setFormValues({...formValues, [event.target.name]: event.target.value})

//     }


//   return (
// <form>
//     <input type="text" pattern="[a-zA-Z]{3,10}" value={formValues.name}
//     onChange={handleFormChange} name="email" />
//     {setErrors.name && <span className="text-red-400 block">{errors.name}</span>
// </form>

// )
// }

// export default ValidationManual