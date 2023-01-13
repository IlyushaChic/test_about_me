import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  let links = [
    { to: "about-me", text: "Обо мне" },
    { to: "portfolio", text: "Портфолио" },
    { to: "blog", text: "Блог" },
  ];

  return (
    <div className="header__container">
      <div className="header__container-items">
        {links.map((el,index) => (
          <NavLink
          key={index}
            to={el.to}
            className={({ isActive }) =>
              isActive
                ? "header__container-item_active"
                : "header__container-item"
            }
          >
            {el.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
