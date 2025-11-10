import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:to-gray-800 mt-20 text-green-800 dark:text-gray-200 transition duration-300">
      <div className="max-w-7xl mx-auto py-10 px-6">
        {/* Grid layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-green-600 dark:text-white">
              The Book Haven
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Discover, share, and manage your favorite books. A modern digital
              library built for readers and thinkers.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-500 cursor-pointer">Home</li>
              <li className="hover:text-green-500 cursor-pointer">All Books</li>
              <li className="hover:text-green-500 cursor-pointer">Add Book</li>
              <li className="hover:text-green-500 cursor-pointer">My Books</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-5 text-xl">
              <a
                href="https://facebook.com"
                className="hover:text-green-500 transition"
              >
                🌐
              </a>
              <a
                href="https://x.com"
                className="hover:text-green-500 transition"
              >
                ✖️
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-green-500 transition"
              >
                📸
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            The Book Haven
          </span>{" "}
          | Designed with 💚 by Code_Is_Fun
        </div>
      </div>
    </footer>
  );
};

export default Footer;
