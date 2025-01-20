import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.";
import { useState } from "react";
import DropDownProfile from "./DropDownProfile";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [ openProfile, setOpenProfile]  = useState(false);
  if (!isAuthenticated) {
    return null; 
  }
  return (
    // <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
    //   <Link to="/">
    //     <h1 className="text-2xl font-bold">Task manager</h1>
    //   </Link>
    //   <ul className="flex gap-x-2">
    //     {isAuthenticated ? (
    //       <>
    //       <li>
    //           <Link to="/profile" className="bg-indigo-500 px-4 py-1 rounded-sm">Bienvenido {user.username}</Link>
    //         </li>
    //         <li>
    //           <Link to="/tasks" className="bg-indigo-500 px-4 py-1 rounded-sm">Tareas</Link>
    //         </li>
    //         <li>
    //           <Link to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-sm">Nueva Tarea</Link>
    //         </li>
    //         <li>
    //           <Link
    //           to="/"
    //           onClick={() =>{
    //             logout()
    //           }}
    //           className="bg-indigo-500 px-4 py-1 rounded-sm">
    //             Logout
    //           </Link>
    //         </li>
    //       </>
    //     ) : (
    //       <>
    //         <li>
    //           <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
    //         </li>
    //         <li>
    //           <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
    //         </li>
    //       </>
    //     )}
    //   </ul>
    // </nav>
    <nav className="main-header flex align-middle justify-between rounded-md">
      {isAuthenticated ? (
        <>
            <div className="main-header-search text-xl">
              <i className="fa-light fa-magnifying-glass search text-gray-700"></i>
              <input
                className="rounded-none align-middle text-base focus:outline-none; color: color: var(--side-font);"
                styles="font-family: Poppins; "
                type="text"
                name="buscador"
                placeholder="Search"
              />
            </div>
            <ul className="main-header-list text-xl gap-4 list-none flex align-middle justify-between">
              <li>
                <Link to="/add-task" className="bg-indigo-500 px-4 py-1 ">
                  Nueva Tarea
                </Link>
              </li>
              <li className="main-header-item">
                <i className="fa-light fa-bell"></i>
              </li>
              <li className="main-header-item">
                <i className="fa-light fa-circle-question text-base"></i>
              </li>
              <li className="main-header-item user">
                <span onClick={() => setOpenProfile((prev) => !prev)}>
                  <i className="fa-light fa-circle-user cursor-pointer"></i>
          {openProfile && <DropDownProfile />}
                </span>
              </li>
            </ul>
        </>
      ) : (
        <></>
      )}
          </nav>
  );
}

export default Navbar;
