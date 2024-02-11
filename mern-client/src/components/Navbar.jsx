import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBookOpenReader, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProviders";
import Login from "../components/Login.jsx"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const {user} = useContext(AuthContext);
  // console.log(user);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // NavItems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-zinc-50" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-rose-500 flex item-center gap-2"
          >
            <FaBookOpenReader className="inline-block" />
            BookSwap
          </Link>
          {/* Nav Items for large devices */}
          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({link, path}) => (
              <Link
                className="block text-base text-black uppercase cursor-pointer hover:text-stone-500"
                key={path}
                to={path}
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for lg devices */}
          <div className="space-x-4 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-rose-500" />
            </button>
            {
                user ? user.email : <Link to={'/Login'}>Login</Link> 
            }
          </div>

          {/* Menu button for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* Nav Items for small devices */}
        <div
          className={`space-y-4 px-4 mt-12 py-7 bg-rose-500 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({link, path}) => (
            <Link
              className="block text-base text-white uppercase cursor-pointer "
              key={path}
              to={path}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
