import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {
  const { id } = useParams()
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)
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
      setCargando(!cargando)
    }
    obtenerClienteAPI()
  }, [])

  return (
    <>
      <h1 className="font-black text-4xl text-blue-600">Editar</h1>
      <p className="mt-2 text-xl">Utiliza el formulario para editar los datos</p>
      <Formulario />
    </>
  )
}

export default EditarCliente
