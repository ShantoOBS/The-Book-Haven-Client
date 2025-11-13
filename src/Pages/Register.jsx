import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import bookImage from "../../public/assets/book.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeContext } from "../Provider/ThemeProvider"; // theme context
import toast from "react-hot-toast";

const Register = () => {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  useEffect(() => {
    document.title = "Register | Book-Haven";
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState("");

  const { signInGoogle, setUser, createUser, setLoading, updatePro } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoURL.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setLocalError(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setLocalError("");
    setLoading(true);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updatePro({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            setLoading(false);
            toast.success("Account Created Successfully.");
            navigate("/");
          })
          .catch((error) => {
            setLocalError(error.message);
            setUser(user);
            setLoading(false);
          });
      })
      .catch((error) => {
        setLocalError(error.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    signInGoogle()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        setLocalError(err.message);
        setLoading(false);
      });
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-20 px-4 transition-colors ${
        isLight ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row overflow-hidden shadow-2xl max-w-4xl w-full transition-colors ${
          isLight ? "bg-white/5" : "bg-white/5"
        }`}
      >

        <div
          className="md:w-1/2 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${bookImage})` }}
        ></div>

 
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full flex items-center justify-center"
        >
          <div
            className={`w-full max-w-md p-8 shadow-lg rounded-lg transition-colors ${
              isLight ? "bg-white text-gray-900" : "bg-[#111827] text-white"
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-2">
              Create Account
            </h2>
            <p
              className={`text-center mb-4 transition-colors ${
                isLight ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Start your library journey
            </p>

            {localError && (
              <p className="text-red-500 text-sm text-center mb-2">
                {localError}
              </p>
            )}

            <form onSubmit={handleRegister} className="space-y-5">
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Enter your full name" },
                { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
                { label: "Photo URL", name: "photoURL", type: "text", placeholder: "Enter your photo URL" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className={`block mb-2 transition-colors ${
                      isLight ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    className={`w-full px-4 py-2 rounded-md outline-none transition-colors ${
                      isLight
                        ? "bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                        : "bg-[#1F2937] text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                    }`}
                  />
                </div>
              ))}

      
              <div className="relative">
                <label
                  className={`block mb-2 transition-colors ${
                    isLight ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  Password
                </label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className={`w-full px-4 py-2 rounded-md outline-none transition-colors ${
                    isLight
                      ? "bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                      : "bg-[#1F2937] text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                  }`}
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
              onClick={handleGoogleLogin}
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

            <p
              className={`text-center mt-4 text-sm transition-colors ${
                isLight ? "text-gray-600" : "text-gray-400"
              }`}
            >
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
