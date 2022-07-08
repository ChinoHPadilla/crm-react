import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <div>
      <>
        <h1 className="font-black text-4xl text-blue-600"> Nuevo Cliente</h1>
        <p className="mt-2">Llenas los siguientes campos para registrar un cliente</p>
        <Formulario />
      </>
    </div>
  )
}

export default NuevoCliente
