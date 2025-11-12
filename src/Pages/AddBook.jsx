import React, { useState } from "react";
// import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    summary: "",
    coverImage: "",
    userEmail: "",
    userName: "",
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const res = await axios.post("", bookData);
    //   if (res.status === 200) {
    //     toast.success("Book added successfully!");
    //     setBookData({
    //       title: "",
    //       author: "",
    //       genre: "",
    //       rating: "",
    //       summary: "",
    //       coverImage: "",
    //       userEmail: "",
    //       userName: "",
    //     });
    //   }
    // } catch (error) {
    //   toast.error("Failed to add book ");
    // }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex justify-center items-center py-12 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-[#111827] p-8 rounded-2xl shadow-lg w-full max-w-2xl border border-gray-800">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Add New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-300 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0B1120] text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter book title"
            />
          </div>

    
          <div>
            <label className="block text-gray-300 mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0B1120] text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter author name"
            />
          </div>


          <div>
            <label className="block text-gray-300 mb-1">Genre</label>
            <input
              type="text"
              name="genre"
              value={bookData.genre}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0B1120] text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="e.g. Fantasy, Mystery, Non-Fiction"
            />
          </div>

 
          <div>
            <label className="block text-gray-300 mb-1">Rating (1–5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={bookData.rating}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0B1120] text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter rating (1-5)"
            />
          </div>


          <div>
            <label className="block text-gray-300 mb-1">Summary</label>
            <textarea
              name="summary"
              value={bookData.summary}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-md bg-[#0B1120] text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Write a short description of the book"
            ></textarea>
          </div>

         
          <div>
            <label className="block text-gray-300 mb-1">Cover Image URL</label>
            <input
              type="text"
              name="coverImage"
              value={bookData.coverImage}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0B1120] text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Paste imgbb image URL"
            />
          </div>

     
          <div>
            <label className="block text-gray-300 mb-1">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={bookData.userEmail}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0B1120] text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

       
          <div>
            <label className="block text-gray-300 mb-1">User Name</label>
            <input
              type="text"
              name="userName"
              value={bookData.userName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0B1120] text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your name"
            />
          </div>

      
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
