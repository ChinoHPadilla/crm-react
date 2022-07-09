import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const urlActual = location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-blue-600 px-5 py-10'>
        <h2 className='text-4xl text-white font-black text-center'>CRM-Clientes</h2>
        <nav className='mt-10'>
          <Link
            to="/clientes"
            className={`${urlActual === '/clientes' ? 'text-white border-l-4 pl-2' : 'text-black'}  p-2 text-2xl block mb-2 font-bold hover:text-white hover:pl-2`}
          >Clientes</Link>
          <Link
            to="/clientes/nuevo"
            className={`${urlActual === '/clientes/nuevo' ? 'text-white border-l-4 pl-2' : 'text-black'}  p-2 text-2xl block mb-2 font-bold hover:text-white hover:pl-2`}
          >Nuevo Cliente</Link>
        </nav>
      </div>
      <div className='md:w-3/4 p-10 bg-gray-200 md:h-screen overflow-y-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
