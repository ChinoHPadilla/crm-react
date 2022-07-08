import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, 'Nombre muy corto')
      .max(20, 'Nombre muy largo')
      .required('Campo requerido'),

    empresa: Yup.string()
      .required('Campo requerido'),

    email: Yup.string()
      .email('Correo invalido')
      .required('Campo obligatorio'),

    telefono: Yup.number()
      .positive('Numero invalido')
      .integer('Numero invalido')
      .typeError('Numero invalido')
  })

  const handleSubmit = (valores) => {
    console.log(valores)
  }

  return (
    <div className='bg-white mt-8 p-5 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl text-center uppercase'>
            Agregar cliente
        </h1>
        <Formik
          initialValues={{
            nombre: '',
            empresa: '',
            email: '',
            telefono: '',
            notas: ''
          }}
          onSubmit={(values) => {
            handleSubmit(values)
          }}
          validationSchema={nuevoClienteSchema}
        >
            {({ errors, touched }) => {
              return (
                <Form className='mt-5'>
                    <div className='mb-3'>
                        <label
                        className='text-gray-800'
                        htmlFor='nombre'
                        >
                            Nombre:
                        </label>
                        <Field
                        id='nombre'
                        name='nombre'
                        type='text'
                        placeholder='ej: Ramon Padilla'
                        className='block w-full mt-1 p-2 bg-gray-50'
                        />
                        {
                          errors.nombre && touched.nombre
                            ? (<Alerta>{errors.nombre}</Alerta>)
                            : null
                        }
                    </div>
                    <div className='mb-3'>
                        <label
                        className='text-gray-800'
                        htmlFor='empresa'
                        >
                            Empresa:
                        </label>
                        <Field
                        id='empresa'
                        name='empresa'
                        type='text'
                        placeholder='ej: Ferreteria Don Chino'
                        className='block w-full mt-1 p-2 bg-gray-50'
                        />
                        {
                          errors.empresa && touched.empresa
                            ? (<Alerta>{errors.empresa}</Alerta>)
                            : null
                        }
                    </div>
                    <div className='mb-3'>
                        <label
                        className='text-gray-800'
                        htmlFor='email'
                        >
                            Email:
                        </label>
                        <Field
                        id='email'
                        name='email'
                        type='email'
                        placeholder='nombre@gmail.com'
                        className='block w-full mt-1 p-2 bg-gray-50'
                        />
                        {
                          errors.email && touched.email
                            ? (<Alerta>{errors.email}</Alerta>)
                            : null
                        }
                    </div>
                    <div className='mb-3'>
                        <label
                        className='text-gray-800'
                        htmlFor='telefono'
                        >
                            Telefono:
                        </label>
                        <Field
                        id='telefono'
                        name='telefono'
                        type='tel'
                        placeholder='ej: 222-222-2222'
                        className='block w-full mt-1 p-2 bg-gray-50'
                        />
                        {
                          errors.telefono && touched.telefono
                            ? (<Alerta>{errors.telefono}</Alerta>)
                            : null
                        }
                    </div>
                    <div className='mb-3'>
                        <label
                        className='text-gray-800'
                        htmlFor='notas'
                        >
                            Notas:
                        </label>
                        <Field
                        as='textarea'
                        id='notas'
                        name='notas'
                        type='text'
                        placeholder='Información adicional'
                        className='block w-full mt-1 p-2 bg-gray-50 h-40'
                        />
                    </div>
                    <input
                    type='submit'
                    value='Agregar'
                    className='mt-5 w-full bg-blue-600 uppercase font-bold text-white text-lg p-3 rounded-md'
                    />
                </Form>
              )
            }}
        </Formik>
    </div>
  )
}

export default Formulario
