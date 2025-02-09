import { Link, useParams } from "react-router-dom";
import { AuthContext, useAuth } from "../context/AuthContext.";
import { useContext, useState } from "react";
import Icons from "./Icons";
import images from "../assets/images";

function Sidebar() {
  const { logout, isAuthenticated, user } = useAuth();
  const params = useParams();
  const [imageSrc] = useState(params.img);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <aside className="h-screen mt-7 flex flex-col items-center rounded-lg bg-[#FF6767] text-[#FFFFFF]">
      {isAuthenticated ? (
        <>
          <div className=" profile-pic flex items-center flex-col">
            <div className="profile-img rounded-full w-20 h-20  box-border shadow-white">
              <Link to={`/profile/${user.id}`}>
                <img
                  src={imageSrc || images["default-avatar"]}
                  alt={user.firstname + user.lastname}
                  className="w-full h-full rounded-full object-cover"
                />
              </Link>
            </div>
            <div className="profile-desc flex flex-col items-center">
              <p>
                {user.firstname} {user.lastname}
              </p>
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
                <Link to="/vital-tasks" className="flex ">
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
                <Link
                  className="flex "
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                >
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
