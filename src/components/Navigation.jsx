import React from "react";
import { FaHome, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to={"/"}>
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to={"/add"}>
            <FaPlusCircle />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
