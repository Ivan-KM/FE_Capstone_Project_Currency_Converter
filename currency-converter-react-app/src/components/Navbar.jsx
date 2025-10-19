import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    { path: "/login", label: "Login" },
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-xl tracking-wide text-yellow-400">KIMX</h1>

        {/* Hamburger button for mobile */}
        {isMobile && (
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {/* Desktop menu */}
        {!isMobile && (
          <div className="flex">
            {links.map(({ path, label }, index) => (
              <div key={path} className={index !== links.length - 1 ? "mr-8" : ""}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `inline-block no-underline py-2 px-2 transition-colors duration-200 ${
                      isActive
                        ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                        : "text-gray-800 hover:text-yellow-400"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div className="flex flex-col mt-4 space-y-3">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `no-underline px-4 py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                    : "text-gray-800 hover:text-yellow-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
