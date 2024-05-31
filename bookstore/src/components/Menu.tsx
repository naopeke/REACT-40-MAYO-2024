import Logo from './Logo';
import Sidebar from './Sidebar';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useUser } from '../contexts/UserProvider';
import Greet from './Greet';

function Menu() {
  console.log("Menu works");

  const [isOpenSidebar, setIsOpenSidebar] = useState (false);


  const toggleMenu = () => {
    setIsOpenSidebar(prevState => !prevState)
  }

  const { user } = useUser();
  console.log('logged in user:', user);
  // const user = { name: 'Nao'};
  // const user = null;

  // const linkStyles = {
  //   color: 'black',
  //   font-size: '2rem'
  // }

  // function customClassName({ isActive}: {isActive: boolean}){
  //   return isActive ? StyleSheet.active : '';
  // }
  


  return (
    <>
       <nav className="w-full flex items-center justify-between flex-wrap bg-[#0d6efd] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logo />
          <NavLink to="/" className="font-semibold text-xl tracking-tight">
            BookStore
          </NavLink>
        </div>

      {!isOpenSidebar && (
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <RxHamburgerMenu />
          </button>
        </div>
      )}

        <div className={`lg:hidden ${isOpenSidebar ? '' : 'hidden'}`}>
          <Sidebar toggleMenu={toggleMenu} />
        </div>

        <div className="hidden lg:flex lg:items-center lg:w-auto md:hidden">
            <div className="text-sm lg:flex-grow">


            {user ? (
              <>
                <NavLink to="/books" className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                Libros 
                </NavLink>

                <NavLink to="/add-book" className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                Añadir Libro
                </NavLink>
  
                <NavLink to="edit-book"  className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                Editar Libro
                </NavLink>
                
                <NavLink to="/profile" className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                Perfil
                </NavLink> 
                <NavLink to="/login" className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                Logout
                </NavLink> 
                <Greet />
              </>

            ) : (
              <>
              <NavLink to="/register" className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                  Register
                </NavLink>
                <NavLink to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  Log In
                </NavLink>
              </>


            )

          }
                

             
            </div>

            {/* <div >
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Log In
              </a>
            </div> */}
        </div>
      </nav>


    </>
);
}

export default Menu;