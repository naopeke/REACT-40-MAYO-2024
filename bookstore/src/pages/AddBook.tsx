import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addBookSchema, AddBookFormValues } from '../schemas/formSchemas';
import Input from '../components/ui/Input';

function AddBook() {
  const { register, handleSubmit, formState } = useForm<AddBookFormValues>({
    mode: 'onChange',
    resolver: zodResolver(addBookSchema),
  });

  const { errors, isValid } = formState;

  function onSubmit(data: AddBookFormValues) {
    console.log(data);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <Input
          label="Titulo"
          type="text"
          {...register('title')}
          error={errors.title?.message}
        />
        <Input
          label="Autor"
          type="text"
          {...register('author')}
          error={errors.author?.message}
        />
        <Input
          label="Foto"
          type="text"
          {...register('photo')}
          error={errors.photo?.message}
        />
        <Input
          label="Precio"
          type="number"
          {...register('price', { valueAsNumber: true })}
          error={errors.price?.message}
        />
        <div className="md:flex md:items-center mb-6">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="type"
          >
            Tipo de libro
          </label>
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
              Añadir Libro
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
