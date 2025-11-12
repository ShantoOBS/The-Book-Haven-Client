import React, { useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import StaticSections from '../Components/StaticSections/StaticSections'
import LibraryBooks from '../Components/LibraryBooks/LibraryBooks'
import { useLoaderData } from 'react-router';

export default function Home() {
    useEffect(() => {
      document.title = "Home | Book-Haven";
    }, []);
     const books = useLoaderData();
  return (
    <div>

        <Banner></Banner>
        <LibraryBooks books={books}></LibraryBooks>
        <StaticSections></StaticSections>
      
    </div>
  )
}
