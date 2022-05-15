import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { path: "/", title: "Home", id: 0 },
    { path: "/movie", title: "Movies", id: 1 },
    { path: "/tv_show", title: "TV Shows", id: 2 },
  ];
  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <div
      className={`w-screen z-50 h-16 2xl:h-20 fixed top-0 transition-colors duration-500 ease-out ${
        navbar ? "bg-black" : "bg-transparent backdrop-blur-sm border-b"
      }`}
    >
      <div className="h-full w-full flex items-center justify-between px-5 max-w-7xl mx-auto">
        <Link
          to="/"
          className="hidden md:block w-full text-white font-bold 2xl:text-3xl hover:text-red-600 transition-colors duration-300 ease-in"
        >
          movieAPP
        </Link>
        <div className="w-full h-full text-white font-medium flex items-center justify-between px-5 md:justify-end md:space-x-7 2xl:text-2xl">
          {menu.map((item) => (
            <Link
              className="hover:text-red-600 transition-colors duration-300 ease-in"
              to={item.path}
              key={item.id}
            >
              {" "}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
