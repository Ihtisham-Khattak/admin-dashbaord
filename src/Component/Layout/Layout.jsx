import React from "react";
import Routers from "../../Routes/Routers"; 
import SlideBar from "../SlideBar/Slidebar";
import NavBar from "../NavBar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <SlideBar />

      <div className="main__layout">
        <NavBar />

        <div className="content">
          <Routers />
        </div>
      </div>
    </div>
  );
};

export default Layout;
