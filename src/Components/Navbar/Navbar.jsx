import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router"; // ✅ Correct import
import Switch from "../Them/Switch";
import Button from "../Them/Button";
import LogoutButton from "../Them/LogoutButton";

const Navbar = ({ user, handleLogout }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme on root element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // ✅ Updated colors for better contrast
  const navLinkClass = `
    p-2 py-2 text-xs md:text-sm font-semibold tracking-wide
    text-gray-300 hover:text-white transition duration-300
  `;

  const links = (
    <>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="/all-books" className={navLinkClass}>
        All Books
      </NavLink>
      <NavLink to="/add-book" className={navLinkClass}>
        Add Book
      </NavLink>
      <NavLink to="/my-books" className={navLinkClass}>
        My Books
      </NavLink>
    </>
  );

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-[#0B1120]/70">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 md:px-15 py-3">
        {/* ---------- Left Section (Logo) ---------- */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-md font-bold text-white hover:text-gray-400 tracking-wide"
          >
            Book Haven
          </Link>
        </div>

        {/* ---------- Middle Section (Navigation Links) ---------- */}
        <nav className="hidden md:flex items-center text-gray-300  dark:text-gray-200">
          {links}
        </nav>

        {/* ---------- Right Section ---------- */}
        <div className="flex items-center">
          {user ? (
            <LogoutButton />
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/login"
                className="text-gray-300 hover:text-gray-400 font-medium transition duration-300"
              >
                Login
              </NavLink>
              <NavLink to="/register">
                <Button Name="Register" />
              </NavLink>
            </div>
          )}

          {/* ---------- Mobile Menu ---------- */}
          <div className="md:hidden flex items-center">
            <details className="relative">
              <summary className="text-2xl cursor-pointer text-white list-none">
                ☰
              </summary>
              <div className="absolute right-0 mt-3 bg-[#0B1120]/95 dark:bg-gray-800 rounded-lg shadow-lg p-3 flex flex-col gap-2 text-gray-300 dark:text-gray-200 w-44">
                {links}
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm transition duration-300"
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <NavLink to="/login" className={navLinkClass}>
                      Login
                    </NavLink>
                    <NavLink to="/register" className={navLinkClass}>
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
