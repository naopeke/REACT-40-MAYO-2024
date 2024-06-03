import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addBookSchema, AddBookFormValues } from '../schemas/formSchemas';
import Input from '../components/ui/Input';
import Heading from "../components/ui/Heading"
import axios from 'axios';
import { useUser } from '../contexts/UserProvider';



function AddBook() {

  const { user } = useUser();
  console.log('User in addbook', user);

  const { register, handleSubmit, formState } = useForm<AddBookFormValues>({
    mode: 'onChange',
    resolver: zodResolver(addBookSchema),
  });

  const { errors, isValid } = formState;

  async function onSubmit(data: AddBookFormValues) {
    try {
      const payload = {...data, id_user: user?.id_user};
      console.log('Payload:', payload); 
      const resp = await axios.post('http://localhost:3000/books', payload)
      console.log('Success', resp.data);
    } catch (error){
      console.log('Error: ', error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <Heading className="text-center mb-12" title="Añadir Libro" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <Input
          label="Titulo"
          type="text"
          {...register('title')}
          error={errors.title?.message}
        />
        </div>

        <div className="md:flex md:items-center mb-6">
        <Input
          label="Autor"
          type="text"
          {...register('author')}
          error={errors.author?.message}
        />
        </div>

        <div className="md:flex md:items-center mb-6">
        <Input
          label="Foto"
          type="text"
          {...register('photo')}
          error={errors.photo?.message}
        />
        </div>

        <div className="md:flex md:items-center mb-6">
        <Input
          label="Precio"
          type="number"
          {...register('price', { valueAsNumber: true })}
          error={errors.price?.message}
        />
        </div>
        
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">        
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="type"
          >
            Tipo de libro
          </label>
          </div>
          <div className="md:w-2/3">
            <select
              id="type"
              {...register('type')}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <option value="">Seleccione un tipo</option>
              <option value="Tapa Blanda">Tapa Blanda</option>
              <option value="Tapa Dura">Tapa Dura</option>
            </select>
            {errors.type && (
              <span className="text-red-400 text-sm">{errors.type.message}</span>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="disabled:cursor-not-allowed disabled:opacity-60 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={!isValid}
            >
              Añadir
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
