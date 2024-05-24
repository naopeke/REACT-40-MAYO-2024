import { FaBook } from "react-icons/fa";
import { MdAddChart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

type SidebarProps = {
    toggleMenu: () => void;
}

function Sidebar(props: SidebarProps) {
    const {toggleMenu} = props;

  return (
    <>
    <div className=" transition-opacity duration-500 absolute left-0 top-0 flex flex-col bg-clip-border  bg-white text-gray-700 h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
    <div className="absolute right-7 cursor-pointer"><IoMdClose onClick={toggleMenu} /></div>
  <div className="mb-2 p-4">
    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Menú</h5>
  </div>
  <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
    <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
      <FaBook />
      </div>
      Libros
    </div>
   
    <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
      <MdAddChart />
      </div>Añadir Libros
    </div>
   
    <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
      <FaEdit />
      </div>Editar Libros <div className="grid place-items-center ml-auto justify-self-end">
      </div>
    </div>
   
    <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
      <IoPerson />
      </div>Profile
    </div>
   
    <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
      <IoMdLogOut />
      </div>Log Out
    </div>
  </nav>
</div>

</>
  )
}

export default Sidebar