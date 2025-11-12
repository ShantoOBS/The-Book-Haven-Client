import React, { useEffect } from 'react'
import AllBooksSection from '../Components/AllBooksSection/AllBooksSection'
import { useLoaderData } from 'react-router';
export default function AllBook() {

    useEffect(() => {
      document.title = "AllBook | Book-Haven";
    }, []);

    const allBooks=useLoaderData();
    console.log(allBooks);
  return (
    <div>
        <AllBooksSection allBooks={allBooks}></AllBooksSection>
    </div>
  )
}
