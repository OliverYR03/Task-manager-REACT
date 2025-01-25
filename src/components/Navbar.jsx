import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.";
import { useState } from "react";
import Icons from "./Icons";
import DropDownProfile from "./DropDownProfile";

function Navbar() {
  const { isAuthenticated} = useAuth();
  const [openProfile, setOpenProfile] = useState(false);
  if (!isAuthenticated) {
    return null;
  }

  const today = new Date();

  // Obtener el día actual en formato escrito
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const dayName = daysOfWeek[today.getDay()];

  // Obtener la fecha en formato DD/MM/YYYY
  const formattedDate = today.toLocaleDateString("es-ES");

  return (
    // <nav className="main-header flex align-middle justify-between rounded-md">
    //   {isAuthenticated ? (
    //     <>
    //       <div className="main-header-search text-xl">
    //         <i className="fa-light fa-magnifying-glass search text-gray-700"></i>
    //         <input
    //           className="rounded-none align-middle text-base focus:outline-none; color: color: var(--side-font);"
    //           styles="font-family: Poppins; "
    //           type="text"
    //           name="buscador"
    //           placeholder="Search"
    //         />
    //       </div>
    //       <ul className="main-header-list text-xl gap-4 list-none flex align-middle justify-between">
    //         <li>
    //           <Link to="/add-task" className="bg-indigo-500 px-4 py-1 ">
    //             Nueva Tarea
    //           </Link>
    //         </li>
    //         <li className="main-header-item">
    //           <i className="fa-light fa-bell"></i>
    //         </li>
    //         <li className="main-header-item">
    //           <i className="fa-light fa-circle-question text-base"></i>
    //         </li>
    //         <li className="main-header-item user">
    //           <span onClick={() => setOpenProfile((prev) => !prev)}>
    //             <i className="fa-light fa-circle-user cursor-pointer"></i>
    //             {openProfile && <DropDownProfile />}
    //           </span>
    //         </li>
    //       </ul>
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </nav>
    <nav className="navbar md:flex-row  main-header flex align-middle justify-between rounded-md h-[90px] px-20 py-7 shadow-lg">
      {isAuthenticated ? (
        <>
          <div className="navText  text-4xl font-semibold">
            <p className="text-[#FF6767] ">
                  To <span className="text-[black]">-Do</span>
            </p>
          </div>
          <div className="navSearch font-['Montserrat'] flex justify-end items-cente shadow-lg ">
            <input
              type="search"
              className="text-xs h-10 w-[695px] py-5 px-4 focus:outline-none"
              placeholder="Search your task here..."
            />
            <button className="mt-1 mr-1 absolute bg-red-400 rounded-lg h-9 w-9 cursor-pointer flex justify-center items-center">
              <Icons.Search size={15} className="text-white " />
            </button>
          </div>
          <div className="navNoti flex justify-between gap-2 items-center">
            <button className=" bg-red-400 rounded-lg h-9 w-9 cursor-pointer flex justify-center items-center">
              <Icons.bell size={15} color="white" className="font-bold" />
            </button>
            <Link to="/add-task" className="bg-indigo-500 px-4 py-1 ">
    //             Nueva Tarea
    //           </Link>
            <button className=" bg-red-400 rounded-lg h-9 w-9 cursor-pointer flex justify-center items-center">
              <Icons.Calendar size={15} color="white" />
            </button>
            {/* <Icons.Calendar size={15} color="black" /> */}
          </div>
          <div className="font-['Inter']">
            <p className="font-medium" >{dayName}</p>
            <p className="font-medium text-[#3ABEFF]">{formattedDate}</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
