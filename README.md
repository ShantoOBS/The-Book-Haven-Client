# The Book Haven 📚

[Live Site Link](https://the-book-haven-client-4jzq9ru1u-shanta-shils-projects.vercel.app/) 

The Book Haven is a full-stack web application that allows users to explore, add, update, and delete books in a digital library. Authenticated users can manage their own books while everyone can browse the library. The project demonstrates the integration of a **Node.js + Express.js** backend, **MongoDB Atlas** for database, and **Firebase Authentication**.

---

## Features ✨

- **User Authentication:** Login, Registration, and Google OAuth integration.  
- **CRUD Operations:** Add, view, update, and delete books.  
- **Dynamic Homepage:** Displays latest 6 books added dynamically from MongoDB.  
- **Private Routes:** Only authenticated users can access add, update, and delete book pages.  
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop devices.  
- **Dark/Light Theme:** Toggle between dark and light themes.  
- **Real-time Notifications:** Success and error messages displayed using React Hot Toast.  
- **Advanced Sorting:** Sort books based on rating on the All Books page.  
- **Custom 404 Page:** Friendly error page for invalid routes.

---

## Technologies Used 🛠️

- **Frontend:** React.js, Tailwind CSS, Framer Motion, React Hot Toast  
- **Backend:** Node.js, Express.js, MongoDB Atlas, Axios  
- **Authentication:** Firebase Authentication (Email & Google Login)  
- **Hosting:** Netlify (Client) & Vercel (Server)  
- **Other Packages:** React Tooltip, Date-fns  

---


## Pages & Routes 📄

- `/` → Home page with banner, latest books, top genres, and featured books  
- `/all-books` → Displays all books in a table with sorting by rating  
- `/add-book` → Add a new book (Private Route)  
- `/my-books` → Shows books added by logged-in user (Private Route)  
- `/update-book/:id` → Update book details (Private Route)  
- `/delete-book/:id` → Delete a selected book (Private Route)  
- `/book-details/:id` → View detailed information of a book (Private Route)  
- `/login` → User login page with email/password and Google OAuth  
- `/register` → User registration page  

---

## Data Structure (MongoDB)

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fantasy / Mystery / Non-Fiction etc.",
  "rating": "1–5 scale",
  "summary": "Short description of the book",
  "coverImage": "imgbb image URL",
  "userEmail": "email of the user who added the book",
  "userName": "name of the user who added the book",
  "createdAt": "ISO timestamp"
}
