import { z } from 'zod';

// type RegisterFormValues = z.infer<typeof registerSchema>;

// const registerSchema = z.object({
//   title: z.string().min(1, 'Campo obligatorio').min(3, 'Minimo 3 caracteres').max(10, 'Maximo 20 caracteres'),
//   author: z.string().min(1, 'Campo obligatorio'),
//   photo: z.string().min(1, 'Campo obligatorio'),
//   price: z.number().min(1, 'Campo obligatorio'),
//   type: z.string().min(1, 'Campo obligatorio')
// })

// const profileSchema = registerSchema.omit({password:true, confirm_password: true});

const addBookSchema = z.object({
  title: z.string().min(1, 'Titulo obligatorio').min(3, 'Minimo 3 caracteres').max(20, 'Maximo 20 caracteres'),
  author: z.string().min(1, 'Autor obligatorio'),
  photo: z.string().url('No es una URL válida').min(1, 'Foto obligatoria'),
  price: z.coerce.number().nonnegative('No puede ser un precio negativo'),
  type: z.enum(['Tapa Blanda', 'Tapa Dura'], {
    errorMap: () => ({ message: 'Tipo de libro obligatorio' }),
  })
});

type AddBookFormValues = z.infer<typeof addBookSchema>

const editBookSchema = z.object({
  title: z.string().min(1, 'Titulo obligatorio').min(3, 'Minimo 3 caracteres').max(20, 'Maximo 20 caracteres'),
  author: z.string().min(1, 'Autor obligatorio'),
  photo: z.string().url('No es una URL válida').min(1, 'Foto obligatoria'),
  price: z.coerce.number().nonnegative('No puede ser un precio negativo'),
  type: z.enum(['Tapa Blanda', 'Tapa Dura'], {
    errorMap: () => ({ message: 'Tipo de libro obligatorio' }),
  })
});

type EditBookFormValues = z.infer<typeof editBookSchema>


export { addBookSchema, editBookSchema };
export type { AddBookFormValues, EditBookFormValues };