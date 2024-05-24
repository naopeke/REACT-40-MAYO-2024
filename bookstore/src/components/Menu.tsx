import Logo from './Logo';
import Sidebar from './Sidebar';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

function Menu() {
  console.log("Menu works");

  const [isOpenSidebar, setIsOpenSidebar] = useState (false);


  const toggleMenu = () => {
    setIsOpenSidebar(prevState => !prevState)
  }

  return (
    <>
       <nav className="w-full flex items-center justify-between flex-wrap bg-[#0d6efd] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logo />
          <span className="font-semibold text-xl tracking-tight">
            BookStore
          </span>
        </div>

        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <RxHamburgerMenu />
          </button>
        </div>

        {isOpenSidebar && (
          <Sidebar toggleMenu={toggleMenu} />
        )}

        <div className="hidden lg:flex lg:items-center lg:w-auto md:hidden">
            <div className="text-sm lg:flex-grow">
              {/* <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-6"
              >
                Perfil
              </a> */}
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6"
              >
                Libros
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6"
              >
                Añadir Libro
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6"
              >
                Editar Libro
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6"
              >
                Log Out
              </a>
            </div>

            <div >
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