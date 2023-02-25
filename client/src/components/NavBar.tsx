import React from "react";
import useLinksHook from "../hooks/useLinks.hook";

const NavBar = () => {
  const links = useLinksHook("ADMIN");
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{ background: "#1F1F1F" }}>
          <a href="#" className="brand-logo">
            <span style={{ color: "#E1E1E1", marginLeft: 20 }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#E1E1E1">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span style={{ marginLeft: 5 }}>Mapsy</span>
          </span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {links}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;