import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VerCliente = () => {
  const { id } = useParams()
  const [cliente, setCliente] = useState({})
  const { nombre, empresa, telefono, email, notas } = cliente

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:3001/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerClienteAPI()
  }, [])

  return (
    <div>
        <h1 className="font-black text-4xl text-blue-600">Información ID: {id}</h1>

        <p className='text-3xl text-gray-600 mt-5'>
            <span className='text-gray-700 uppercase font-bold'>Cliente: </span>
            {nombre}
        </p>
        <p className='text-3xl text-gray-600 mt-2'>
            <span className='text-gray-700 uppercase font-bold'>Empresa: </span>
            {empresa}
        </p>
        <p className='text-3xl text-gray-600 mt-2'>
            <span className='text-gray-700 uppercase font-bold'>Email: </span>
            {email}
        </p>

        {notas && (
            <p className='text-3xl text-gray-600 mt-2'>
                <span className='text-gray-700 uppercase font-bold'>Telefono: </span>
                {telefono}
            </p>
        )}
        {notas && (
            <p className='text-3xl text-gray-600 mt-2'>
                <span className='text-gray-700 uppercase font-bold'>Notas: </span>
                {notas}
            </p>
        )}

    </div>
  )
}

export default VerCliente
