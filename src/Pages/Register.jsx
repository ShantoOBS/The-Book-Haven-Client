import React, { useState } from "react";
import { Link } from "react-router";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import bookImage from '../../public/assets/book.jpg'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-20 px-4">
      <div className="flex flex-col md:flex-row bg-white/5 overflow-hidden shadow-2xl max-w-4xl w-full">
    
        <div
          className="md:w-1/2 md:h-auto bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${bookImage})`,
          }}
        ></div>


        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full flex items-center justify-center "
        >
          <div className="w-full max-w-md bg-[#111827] p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-white text-center mb-2">
              Create Account
            </h2>
            <p className="text-gray-400 text-center mb-4">
              Start your library journey
            </p>

            <form className="space-y-5">

              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 bg-[#1F2937] text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>


              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-[#1F2937] text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>


              <div>
                <label className="block text-gray-300 mb-2">Photo URL</label>
                <input
                  type="text"
                  placeholder="Enter your photo URL"
                  className="w-full px-4 py-2 bg-[#1F2937] text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>


              <div className="relative">
                <label className="block text-gray-300 mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-[#1F2937] text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                <span
                  className="absolute right-3 top-11 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </span>
              </div>

       
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white py-2 rounded-md font-semibold"
              >
                Register
              </motion.button>
            </form>


            <div className="flex items-center gap-2 my-4">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>


            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex justify-center items-center gap-2 bg-white transition-all py-2 rounded-md font-medium"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </motion.button>


            <p className="text-center text-gray-400 mt-4 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-all"
              >
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
