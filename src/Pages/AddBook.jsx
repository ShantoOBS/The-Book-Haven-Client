import React, { useContext, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeContext } from "../Provider/ThemeProvider";

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  useEffect(() => {
    document.title = "AddBook | Book-Haven";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bookData = {
      title: form.title.value,
      author: form.author.value,
      genre: form.genre.value,
      rating: form.rating.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
      userEmail: form.userEmail.value,
      userName: form.userName.value,
      createdAt: new Date().toISOString(),
    };

    const token = user?.accessToken;

    try {
      const res = await axios.post("https://the-book-haven-server-delta.vercel.app/add-book", bookData, {
        headers: { authorization: `Bearer ${token}` },
      });
      if (res.status === 200 || res.status === 201) {
        toast.success("Book added successfully!");
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add book");
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center py-12 px-4 transition-colors ${
        isLight ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`p-8 rounded-2xl shadow-lg w-full max-w-2xl border transition-colors ${
          isLight ? "bg-white border-gray-300 text-gray-900" : "bg-gray-800 border-gray-700 text-white"
        }`}
      >
        <h2
          className={`text-3xl font-semibold text-center mb-6 transition-colors ${
            isLight ? "text-gray-900" : "text-white"
          }`}
        >
          Add New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "Title", name: "title", type: "text", placeholder: "Enter book title" },
            { label: "Author", name: "author", type: "text", placeholder: "Enter author name" },
            { label: "Genre", name: "genre", type: "text", placeholder: "e.g. Fantasy, Mystery, Non-Fiction" },
            { label: "Rating (1–5)", name: "rating", type: "number", min: 1, max: 5, placeholder: "Enter rating (1-5)" },
            { label: "Summary", name: "summary", type: "textarea", placeholder: "Write a short description of the book" },
            { label: "Cover Image URL", name: "coverImage", type: "text", placeholder: "Paste imgbb image URL" },
            { label: "User Email", name: "userEmail", type: "email", placeholder: "Enter your email" },
            { label: "User Name", name: "userName", type: "text", placeholder: "Enter your name" },
          ].map((field) => (
            <div key={field.name}>
              <label className={`block mb-1 transition-colors ${isLight ? "text-gray-700" : "text-gray-300"}`}>
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  required
                  rows="4"
                  placeholder={field.placeholder}
                  className={`w-full p-3 rounded-md border transition-colors ${
                    isLight ? "bg-gray-100 border-gray-300 text-gray-900" : "bg-gray-700 border-gray-600 text-white"
                  } focus:outline-none focus:border-indigo-500`}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  min={field.min || undefined}
                  max={field.max || undefined}
                  required
                  placeholder={field.placeholder}
                  className={`w-full p-3 rounded-md border transition-colors ${
                    isLight ? "bg-gray-100 border-gray-300 text-gray-900" : "bg-gray-700 border-gray-600 text-white"
                  } focus:outline-none focus:border-indigo-500`}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
