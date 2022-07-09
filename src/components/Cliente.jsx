import { useNavigate } from 'react-router-dom'

const Cliente = ({ cliente }) => {
  const navigate = useNavigate()
  const { nombre, empresa, telefono, email, id } = cliente
  return (
        <tr className="border-b-4">
            <td className="p-3">{nombre}</td>
            <td className="p-3">{empresa}</td>
            <td className="p-3 text-justify">
                <p><span className="text-gary-800 uppercase font-bold">Email: </span>{email}</p>
                <p><span className="text-gary-800 uppercase font-bold">Telefono: </span>{telefono}</p>
            </td>
            <td className="p-3">
                <button
                  type='button'
                  onClick={() => navigate(`/clientes/${id}`)}
                  className='hover:cursor-pointer hover:bg-yellow-500 hover:text-white transition-all w-full uppercase font-bold text-yellow-500 text-sm p-2 rounded-md border-2 hover:shadow-md mb-1'
                >Ver</button>

                <button
                  type='button'
                  onClick={() => navigate(`/clientes/editar/${id}`)}
                  className='hover:cursor-pointer hover:bg-blue-600 hover:text-white transition-all w-full uppercase font-bold text-blue-600 text-sm p-2 rounded-md border-2 hover:shadow-md mb-1'
                >Editar</button>

                <button
                  type='button'
                  className='hover:cursor-pointer hover:bg-red-600 hover:text-white transition-all w-1/2 uppercase font-bold text-red-500 text-sm p-2 rounded-md hover:shadow-sm'
                >Eliminar</button>
            </td>
        </tr>
  )
}

export default Cliente
