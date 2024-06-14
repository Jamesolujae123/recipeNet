import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import brand from "../assets/brand-pic.png";
import logo from "../assets/logo.jpg";
import "./Nav.css";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isclicked, setIsCLicked] = useState(false);

  const clicked = () => {
    setIsCLicked(true);
    setIsMobile(true);
  };

  const unclicked = () => {
    setIsMobile(false);
    setIsCLicked(false);
  };

  return (
    <div className="nav-cont">
      <nav className="Navi-cont">
        <div className="left-cont">
          <div>
            {" "}
            <img className="brand" src={logo} alt="b-pic" />{" "}
          </div>

          <div className="brand-d">
            <h2 className="Title">Recipe Net</h2>
            <p className="desc">An Encyclopedia of recipies</p>
          </div>
        </div>
        <div className={isMobile ? "Nav-links-mobile" : "Nav-links"}>
          <Link className="bro" to={"/"}>
            Home
          </Link>
          <Link className="bro" to={"/Recent"}>
            Recent recipe
          </Link>
          <Link className="bro" to={"/AddRecipe"}>
            Add recipe
          </Link>
          <Link className="bro" to={"/Blog"}>
            Blog
          </Link>
          <Link className="bro" to={"/ContactUs"}>
            Contact Us
          </Link>
          <Link className="bro" to={"/AboutUs"}>
            About
          </Link>
        </div>
        <div className="conti">
          <div className="right-cont">
            <Link className="bro-1" to={"/Search"}>
              <IoMdSearch />
            </Link>
            <Link className="bro-1" to={"/signin"}>
              Sigin
            </Link>
          </div>
          <div className="dddd">
            <a href="javascript:void(0)" className="dropdown">
              {isclicked ? (
                <IoCloseSharp onClick={unclicked} />
              ) : (
                <GiHamburgerMenu onClick={clicked} />
              )}
            </a>
            {/* <a href="#" className="x">
              <IoCloseSharp />
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
