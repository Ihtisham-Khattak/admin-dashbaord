import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./Slidebar.css";

const Slidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <i class="ri-taxi-line"></i>
          </span>
          ojo
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((items, index) => (
              <li className="nav__items" key={index}>
                <NavLink to={items.path} className={(navClass) => navClass.isActive ? 'nav__active nav__link' : 'nav__link'}>
                  <span>
                    <i className={items.icon}></i>
                  </span>
                  {items.display}
                </NavLink> 
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__bottom">
             <span> <i class="ri-logout-circle-r-line"></i></span>Log Out   
        </div>

      </div>
    </div>
  );
};

export default Slidebar;
