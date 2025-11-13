import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import bookImage from "../../public/assets/book.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeContext } from "../Provider/ThemeProvider";


const Login = () => {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  const { signInGoogle, setUser, setError, setLoading, loginUser, forgatePass } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  useEffect(() => {
    document.title = "Login | Book-Haven";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    setLoading(true);
    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Invalid email or password!");
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    signInGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Google login failed!");
      })
      .finally(() => setLoading(false));
  };

  const handleForgotPassword = () => {
    if (!emailForReset) {
      toast.error("Please enter your email first!");
      return;
    }

    forgatePass(emailForReset)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-20 px-4 transition-colors ${
        isLight ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div
        className={`flex flex-col md:flex-row overflow-hidden shadow-2xl max-w-4xl w-full rounded-xl transition-colors ${
          isLight ? "bg-white" : "bg-gray-800/80 backdrop-blur-md"
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
          <div className="w-full max-w-md p-8">
            <h2 className={`text-3xl font-bold text-center mb-2 transition-colors ${isLight ? "text-gray-900" : "text-white"}`}>
              Welcome Back
            </h2>
            <p className={`text-center mb-4 transition-colors ${isLight ? "text-gray-700" : "text-gray-300"}`}>
              Access your library account
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className={`block mb-2 transition-colors ${isLight ? "text-gray-700" : "text-gray-300"}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmailForReset(e.target.value)}
                  className={`w-full px-4 py-2 rounded-md outline-none transition-all ${
                    isLight ? "bg-gray-100 text-gray-900 focus:ring-2 focus:ring-indigo-500" : "bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
                  }`}
                  required
                />
              </div>

              <div className="relative">
                <label className={`block mb-2 transition-colors ${isLight ? "text-gray-700" : "text-gray-300"}`}>Password</label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 rounded-md outline-none transition-all ${
                    isLight ? "bg-gray-100 text-gray-900 focus:ring-2 focus:ring-indigo-500" : "bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
                  }`}
                  required
                />
                <span
                  className={`absolute right-3 top-11 cursor-pointer transition-colors ${
                    isLight ? "text-gray-500" : "text-gray-400"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </span>
              </div>

              <div className="flex justify-end">
                <p
                  onClick={handleForgotPassword}
                  className="text-sm text-indigo-500 hover:text-indigo-400 cursor-pointer transition-all"
                >
                  Forgot Password?
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-2 rounded-md font-semibold transition-all bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Login
              </motion.button>
            </form>

            <div className="flex items-center gap-2 my-4">
              <div className="flex-grow h-px bg-gray-400"></div>
              <span className="text-sm transition-colors">{isLight ? "or" : "or"}</span>
              <div className="flex-grow h-px bg-gray-400"></div>
            </div>

            <motion.button
              onClick={handleGoogleLogin}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full flex justify-center items-center gap-2 py-2 rounded-md font-medium transition-all ${
                isLight ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </motion.button>

            <p className={`text-center mt-4 text-sm transition-colors ${isLight ? "text-gray-700" : "text-gray-300"}`}>
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-indigo-500 hover:text-indigo-400 font-medium transition-all"
              >
                Register
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
