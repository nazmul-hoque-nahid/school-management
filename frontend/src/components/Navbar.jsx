import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { navbarItems } from "./navbarData";
import Logo from "../assets/Logo.jpg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [lockHover, setLockHover] = useState(false);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDropdown("");

    setLockHover(true);
    setTimeout(() => setLockHover(false), 250);
  };

  const toggleMobileDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? "" : name));
  };

  return (
    <nav className="bg-linear-to-t from-slate-600 to-slate-900 shadow-md sticky top-0 z-50">

      
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO (ONLY MOBILE + TABLET) */}
        <div className="lg:hidden">
          <Link to="/" onClick={closeAll} className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full shadow-md" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white text-3xl cursor-pointer transition-all duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* NAVIGATION MENU */}
        <ul
          className={`
            lg:flex lg:space-x-6 absolute lg:static left-0 w-full lg:w-auto 
            bg-white lg:bg-transparent 
            transition-all duration-500 ease-in-out shadow-lg lg:shadow-none
            
            ${mobileOpen
              ? "top-16 opacity-100 max-h-[85vh] overflow-y-auto"
              : "top-[-500px] opacity-0"
            }

            lg:opacity-100 lg:max-h-none lg:overflow-visible
          `}
        >
          {navbarItems.map((item) => (
            <li key={item.name} className="relative px-4 py-3 lg:py-0 group">

              {/* NORMAL LINK */}
              {!item.dropdown ? (
                <Link
                  to={item.path}
                  className="block text-gray-700 lg:text-white font-medium hover:text-blue-700 transition"
                  onClick={closeAll}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  {/* DROPDOWN HEADER */}
                  <div
                    className="flex items-center justify-between lg:justify-start cursor-pointer 
                               text-gray-700 lg:text-white font-medium hover:text-blue-700"
                    onClick={() => toggleMobileDropdown(item.name)}
                  >
                    {item.name}
                    <IoChevronDown
                      className={`
                        ml-1 text-lg transition-transform duration-300
                        ${openDropdown === item.name ? "rotate-180" : ""} 
                        lg:group-hover:rotate-180
                      `}
                    />
                  </div>

                  {/* DROPDOWN MENU */}
                  <ul
                    className={`
                     bg-linear-to-t from-slate-600 to-slate-900 border shadow-md rounded-md 
                      lg:absolute lg:left-0 lg:mt-2 lg:w-56 
                      transition-all duration-300 z-50 text-sm

                      ${
                        openDropdown === item.name
                          ? "max-h-96 opacity-100 visible"
                          : "max-h-0 opacity-0 invisible"
                      }
                      overflow-hidden

                      ${
                        !lockHover &&
                        `lg:max-h-0 lg:opacity-0 lg:invisible 
                         lg:group-hover:max-h-96 lg:group-hover:opacity-100 lg:group-hover:visible`
                      }
                    `}
                  >
                    {item.dropdown.map((subItem) => (
                      <li
                        key={subItem.name}
                        className="px-4 py-2 hover:bg-blue-700"
                      >
                        <Link
                          to={subItem.path}
                          onClick={closeAll}
                          className="text-white text-sm block font-semibold"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}