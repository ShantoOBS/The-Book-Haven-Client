import React, { useContext } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { ThemeContext } from "../../Provider/ThemeProvider"; 

const Footer = () => {
  const { theme } = useContext(ThemeContext); 

  const isLight = theme === "light";

  return (
    <footer
      className={`py-16 border-t transition-colors ${
        isLight ? "bg-gray-100 border-gray-300 text-gray-900" : "bg-[#0B1120] border-gray-800 text-gray-300"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-15">
        <div className="grid md:grid-cols-4 gap-10 mb-14">

          <div>
            <Link
              to="/"
              className={`text-md font-bold tracking-wide transition-colors ${
                isLight ? "text-gray-900 hover:text-gray-600" : "text-white hover:text-gray-400"
              }`}
            >
              Book Haven
            </Link>
            <p className={`text-sm leading-relaxed transition-colors ${isLight ? "text-gray-700" : "text-gray-400"}`}>
              Discover, share, and manage your favorite books — your modern
              digital library crafted for passionate readers and thinkers.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 transition-colors ${isLight ? "text-blue-600" : "text-blue-400"}`}>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "All Books", "Add Book", "My Books"].map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer transition-all ${
                    isLight ? "hover:text-blue-600 hover:translate-x-1" : "hover:text-blue-400 hover:translate-x-1"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 transition-colors ${isLight ? "text-blue-600" : "text-blue-400"}`}>
              Follow Us
            </h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://facebook.com"
                className={`transition-transform ${isLight ? "hover:text-blue-600 hover:scale-110" : "hover:text-blue-400 hover:scale-110"}`}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com"
                className={`transition-transform ${isLight ? "hover:text-blue-600 hover:scale-110" : "hover:text-blue-400 hover:scale-110"}`}
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                className={`transition-transform ${isLight ? "hover:text-blue-600 hover:scale-110" : "hover:text-blue-400 hover:scale-110"}`}
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 transition-colors ${isLight ? "text-blue-600" : "text-blue-400"}`}>
              Newsletter
            </h3>
            <p className={`text-sm mb-3 transition-colors ${isLight ? "text-gray-700" : "text-gray-400"}`}>
              Stay updated with new arrivals, reviews, and book community news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 ${
                  isLight
                    ? "bg-white text-gray-900 placeholder-gray-400 focus:ring-blue-500 border border-gray-300"
                    : "bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-blue-500 border border-gray-700"
                }`}
                required
              />
              <button
                type="submit"
                className={`px-5 py-2 font-semibold rounded-md transition-colors w-full sm:w-auto ${
                  isLight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      
        <div
          className={`border-t pt-6 text-center text-sm transition-colors ${
            isLight ? "border-gray-300 text-gray-700" : "border-gray-800 text-gray-500"
          }`}
        >
          © {new Date().getFullYear()}{" "}
          <span className={isLight ? "font-semibold text-blue-600" : "font-semibold text-blue-400"}>
            The Book Haven
          </span>{" "}
          | Designed with 💙 by{" "}
          <span className={isLight ? "text-gray-900 font-medium" : "text-gray-300 font-medium"}>
            Code_Is_Fun
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
