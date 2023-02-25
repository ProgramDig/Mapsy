import React from "react";
import {NavLink} from "react-router-dom";

const UseLinksHook = (role: string) => {
  switch (role) {
    case "ADMIN":
      return(
        <>
          <li><NavLink to="/home">Головна</NavLink></li>
          <li><NavLink to="/admin">Адмін панель</NavLink></li>
        </>
      );
    case "USER":
      return(
        <>
          <li><NavLink to="/home">Головна</NavLink></li>
        </>
      );
    default:
      return (
        <>
          <li><NavLink to="/home">Головна</NavLink></li>
        </>
      );
  }
};

export default UseLinksHook;