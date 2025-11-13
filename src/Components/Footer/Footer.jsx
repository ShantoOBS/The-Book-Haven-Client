import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 py-16 border-t border-gray-800 ">
      <div className="max-w-6xl mx-auto px-5 md:px-15">
     
        <div className="grid md:grid-cols-4 gap-10 mb-14">
      
          <div>
             <Link
            to="/"
            className="text-md font-bold text-white hover:text-gray-400 tracking-wide"
          >
            Book Haven
          </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Discover, share, and manage your favorite books — your modern
              digital library crafted for passionate readers and thinkers.
            </p>
          </div>

  
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "All Books", "Add Book", "My Books"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-400 hover:translate-x-1 transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Follow Us
            </h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://facebook.com"
                className="hover:text-blue-400 hover:scale-110 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com"
                className="hover:text-blue-400 hover:scale-110 transition-transform"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-blue-400 hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

       
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Stay updated with new arrivals, reviews, and book community news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

     
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-400">
            The Book Haven
          </span>{" "}
          | Designed with 💙 by{" "}
          <span className="text-gray-300 font-medium">Code_Is_Fun</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
