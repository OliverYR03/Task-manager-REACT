import React from "react";
import { useAuth } from "../context/AuthContext.";
import { Link } from "react-router-dom";

function DropDownProfile() {
  const { logout } = useAuth();
  return (
    <div className="dropDownProfile flex flex-col text-sm">
      <ul className="flex flex-col gap-4">
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              logout();
            }}
            className="b"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDownProfile;
