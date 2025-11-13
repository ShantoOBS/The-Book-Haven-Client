import React, { useContext } from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';


export default function NotFound() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 ${
        theme === 'light' ? 'bg-gray-100' : 'bg-[#0B1120]'
      }`}
    >
      <div className="text-center">
        <p className={`text-base font-semibold ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`}>
          404
        </p>
        <h1 className={`mt-4 text-5xl font-semibold tracking-tight sm:text-7xl ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          Page not found
        </h1>
        <p className={`mt-6 text-lg sm:text-xl/8 ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-400'
        }`}>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ${
              theme === 'light'
                ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                : 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
            }`}
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
}
