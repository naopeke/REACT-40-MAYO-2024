import { useState, useRef } from "react";
import Heading from "../components/ui/Heading"

function EditBook() {

  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    photo: '',
    price: '',
    type: ''
  });

  

  const inputRef = useRef<null | HTMLInputElement>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(formValues);

    setFormValues({
      title: '',
      author: '',
      photo: '',
      price: '',
      type: ''
    });
    inputRef.current?.focus();
  }



  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <Heading className="text-center mb-12" title="Editar Libro" />
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Titulo
            </label>
          </div>
          <div className="md:w-2/3">
            <input ref={inputRef} name="title" value={formValues.title} onChange={handleInputChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Autor
            </label>
          </div>
          <div className="md:w-2/3">
            <input ref={inputRef} name="author" value={formValues.author} onChange={handleInputChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Tipo de libro
            </label>
          </div>
          <div className="md:w-2/3">
            <select name="type" value={formValues.type} onChange={handleSelectChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              <option value="">Seleccione un tipo</option>
              <option value="Tapa Blanda">Tapa Blanda</option>
              <option value="Tapa Dura">Tapa Dura</option>
            </select>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Foto
            </label>
          </div>
          <div className="md:w-2/3">
            <input ref={inputRef} name="photo" value={formValues.photo} onChange={handleInputChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Actualizar
            </button>
          </div>
        </div>
  </form>
    
    
    </div>
  )
}

export default EditBook



// function EditBook() {

//   const [formValues, setFormValues] = useState({
//     id: '',
//     title: '',
//     type:''
//   });

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
//     const {name, value, type checked} = event.target; 
 
//     setFormValues({...formValues, [name]: type === 'checkbox' ? checked: value})
  
//   }

//   function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>){
//     const { value, name} = event.target;
//     setFormValues({...formValues, [name]:value});
//   }
  
//   return (
//     <>
//     <div className="mt-20">EditBook</div>
// <select value={formValues.title} name="title">
//   tapa blanda
// </select>
//     </>

//   )
// }

// export default EditBook