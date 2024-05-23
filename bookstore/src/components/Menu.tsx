import "./Menu.css";
import Logo from './Logo';

function Menu() {
  console.log("Menu works");

  return (
    <>
       <nav className="w-full flex items-center justify-between flex-wrap bg-[#BF9B30] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logo />
          <span className="font-semibold text-xl tracking-tight">
            BookStore
          </span>
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {/* <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-6"
            >
              Perfil
            </a> */}
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-900 mx-6"
            >
              Libros
            </a>
            {/* <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-6"
            >
              Añadir Libro
            </a> */}
            {/* <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-6"
            >
              Editar Libro
            </a> */}
            {/* <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-6"
            >
              Log Out
            </a> */}
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Log In
            </a>
          </div>
        </div>
      </nav>
    </>
);
}

export default Menu;