import logo from "../assets/logo.png";
import { navBarItems } from "../datas";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`absolute top-0 right-0 left-0 bottom-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
      <nav className="py-4 px-6 border-b shadow-md fixed top-0 right-0 left-0 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-28">
            {/* logo and name */}
            <a href="/" className="flex items-center">
              <img className="h-[4.5rem]" src={logo} alt="logo" />
              <h1 className="text-xl md:text-2xl font-bold">Coffee Hub</h1>
            </a>
            {/* nav items */}
            <ul className="space-x-16 hidden md:block">
              {navBarItems.map((item, index) => {
                return (
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    activeClass="active"
                    className="text-lg font-bold cursor-pointer"
                    to={item.path}
                    key={index}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </ul>
          </div>
          {/* make coffee */}

          <button className="text-md md:text-lg bg-primary text-white py-2 px-4 rounded-md hidden md:block hover:bg-tartiary">
            Make Coffee
          </button>

          {/* menu icon */}
          <button className="block md:hidden" onClick={() => setOpen(!open)}>
            <FaBars className="text-3xl" />
          </button>
        </div>
        <SideBar open={open} setOpen={setOpen} />
      </nav>
    </>
  );
};

export default NavBar;
