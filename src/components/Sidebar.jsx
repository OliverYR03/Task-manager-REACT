import { Link } from "react-router-dom";
import { AuthContext, useAuth } from "../context/AuthContext.";
import { useContext } from "react";
function Sidebar() {
  const { logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null; 
  }
  return (
    <aside className="flex border-r-2 bg-white">
    {isAuthenticated ? (
            <>
            <div className="sidebar min-h-dvh w-3 p-2">
              <div className="sidebar-top flex  justify-between align-middle py-3 px-5 font-medium text-base w-full">
                <i className="fa-solid fa-bars-progress"> </i>Zen Manager
              </div>
              <div className="sidebar-body">
                <ul className="sidebar-list list-none p-0 flex flex-col gap-2">
                  <li className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-base">
                    <i className="fa-light fa-table"></i>Dashboard
                  </li>
                  <li className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-base s-active">
                    <i className="fa-light fa-table-columns"></i>Board
                  </li>
                  <li className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-base">
                    <i className="fa-light fa-database"></i>Analisis
                  </li>
                  <li className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-base">
                    <i className="fa-light fa-gear"></i>Opciones
                  </li>
                </ul>
              </div>
              <div className="e ">
                <Link
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                  className="sidebar-element rounded-sm flex gap-1 align-middle py-3 px-5 font-medium text-bas"
                >
                  <i className="fa-light fa-right-from-bracket"></i> Logout
                </Link>
              </div>
            </div>
        </>
      ) : (
        <>
        </>
      )}
      </aside>
  );
}

export default Sidebar;
