import React, { useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import StaticSections from '../Components/StaticSections/StaticSections'
import LibraryBooks from '../Components/LibraryBooks/LibraryBooks'

export default function Home() {
    useEffect(() => {
      document.title = "Home | Book-Haven";
    }, []);
  return (
    <div>

        <Banner></Banner>
        <LibraryBooks></LibraryBooks>
        <StaticSections></StaticSections>
      
    </div>
  )
}
