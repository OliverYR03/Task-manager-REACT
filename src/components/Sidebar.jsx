import { Link } from "react-router-dom";
import { AuthContext, useAuth } from "../context/AuthContext.";
import { useContext } from "react";
import Icons from "./Icons";
import images from "../assets/images";

function Sidebar() {
  const { logout, isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return null;
  }
  return (
    // <aside className="flex border-r-2 bg-white">
    // {isAuthenticated ? (
    //         <>
    //         <div className="sidebar min-h-dvh w-3 p-2">
    //           <div className="sidebar-top flex  justify-between align-middle py-3 px-5 font-medium text-base w-full">
    //             <i className="fa-solid fa-bars-progress"> </i>Zen Manager
    //           </div>
    //           <div className="sidebar-body">
    //             <ul className="sidebar-list list-none p-0 flex flex-col gap-2">
    //               <li className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-base">
    //                 <i className="fa-light fa-table"></i>Dashboard
    //               </li>
    //               <li className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-base s-active">
    //                 <i className="fa-light fa-table-columns"></i>Board
    //               </li>
    //               <li className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-base">
    //                 <i className="fa-light fa-database"></i>Analisis
    //               </li>
    //               <li className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-base">
    //                 <i className="fa-light fa-gear"></i>Opciones
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="e ">
    //             <Link className="flex "
    //               to="/"
    //               onClick={() => {
    //                 logout();
    //               }}
    //               className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-bas"
    //             >
    //               <i className="fa-light fa-right-from-bracket"></i> Logout
    //             </Link>
    //           </div>
    //         </div>
    //     </>
    //   ) : (
    //     <>
    //     </>
    //   )}
    //   </aside>
    <aside className="h-screen mt-7 flex flex-col items-center rounded-lg bg-[#FF6767] text-[#FFFFFF]">
      {isAuthenticated ? (
        <>
          <div className=" profile-pic flex items-center flex-col">
            <div className="profile-img rounded-full w-20 h-20  box-border shadow-white">
              <Link to="/profile"> <img
                src={images.yo}
                alt={user.firstname + user.lastname}
                className="w-full h-full rounded-full object-cover"
              /></Link>
            </div>
            <div className="profile-desc flex flex-col items-center">
              <p>{user.firstname}  {user.lastname}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="nav flex flex-col text-lg font-['Inter'] font-medium ">
            <ul className="">
              <li className="flex items-center h-[59px]">
                <Link className="flex " to="/tasks">
                  <Icons.dashboard size={24} className="text-white " />{" "}
                  Dashboard
                </Link>
              </li>
              <li className="flex items-center h-[59px]">
                <Link className="flex ">
                  <Icons.exclamation size={24} className="text-white " />
                  Vital Task
                </Link>
              </li>
              <li className="flex items-center h-[59px]">
                <Link to="/mytasks" className="flex ">
                  <Icons.task size={24} className="text-white " /> My Task
                </Link>
              </li>
              <li className="flex items-center h-[59px]">
                <Link to="/categories" className="flex ">
                  <Icons.categories size={24} className="text-white " /> Task
                  categories
                </Link>
              </li>
              <li className="flex items-center h-[59px]">
                <Link className="flex ">
                  <Icons.settings size={24} className="text-white " /> Settings
                </Link>
              </li>
              <li className="flex items-center h-[59px] ">
                <Link className="flex ">
                  <Icons.help size={24} className="text-white " />
                  Help
                </Link>
              </li>
            </ul>
            <ul className="">
              <li className="flex items-end h-[59px] w-[157px]">
                <Link className="flex " to="/"
                   onClick={() => {
                     logout();
                   }}>
                  <Icons.logout size={24} className="text-white " />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </aside>
  );
}

export default Sidebar;
