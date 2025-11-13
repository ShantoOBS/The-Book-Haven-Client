import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Them/Button";
import LogoutButton from "../Them/LogoutButton";
import { AuthContext } from "../../Provider/AuthProvider";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  const handleSignOut = () => {
    signOutUser()
      .then(() => setUser(null))
      .catch((error) => console.error("Logout error:", error));
  };

  const navLinkClass = `p-2 py-2 text-xs md:text-sm font-semibold tracking-wide transition-colors
    ${isLight ? "text-gray-700 hover:text-gray-900" : "text-gray-300 hover:text-white"}`;

  const links = (
    <>
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/all-books" className={navLinkClass}>All Books</NavLink>
      <NavLink to="/add-book" className={navLinkClass}>Add Book</NavLink>
      <NavLink to="/my-books" className={navLinkClass}>My Books</NavLink>
    </>
  );

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-md transition-colors 
        ${isLight ? "bg-white shadow-md" : "bg-gray-900 shadow-lg"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 md:px-15 py-3">
    
        <div className="flex items-center">
          <Link
            to="/"
            className={`text-md font-bold tracking-wide transition-colors
              ${isLight ? "text-gray-900 hover:text-gray-700" : "text-white hover:text-gray-300"}`}
          >
            Book Haven
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          {links}

          <button
            onClick={toggleTheme}
            className={`ml-4 flex items-center gap-2 px-3 py-1 rounded-full transition-all
              ${isLight
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
          >
            {isLight ? <FaMoon /> : <FaSun />}
            <span className="text-xs">{isLight ? "Dark" : "Light"}</span>
          </button>
        </nav>

     
        <div className="flex items-center gap-3">
          {user ? (
            <div className="hidden md:flex">
              <LogoutButton onClick={handleSignOut} />
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/login"
                className={`${isLight ? "text-gray-700 hover:text-gray-900" : "text-gray-300 hover:text-white"} font-medium transition duration-300`}
              >
                Login
              </NavLink>
              <NavLink to="/register"><Button Name="Register" /></NavLink>
            </div>
          )}

          
          <div className="md:hidden flex items-center">
            <details className="relative">
              <summary
                className={`text-2xl cursor-pointer transition-colors
                  ${isLight ? "text-gray-900" : "text-white"}`}
              >
                
              </summary>
              <div
                className={`absolute right-0 mt-3 rounded-lg shadow-lg p-3 flex flex-col gap-2 w-60 transition-colors
                  ${isLight ? "bg-white text-gray-800" : "bg-gray-800 text-gray-200"}`}
              >
                {links}

                <button
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all
                    ${isLight
                      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    }`}
                >
                  {isLight ? <FaMoon /> : <FaSun />}
                  <span className="text-xs">{isLight ? "Dark" : "Light"}</span>
                </button>

                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="text-left px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm transition duration-300"
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <NavLink to="/login" className={navLinkClass}>Login</NavLink>
                    <NavLink to="/register" className={navLinkClass}>Register</NavLink>
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
