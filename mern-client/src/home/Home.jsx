import React from 'react'
import Banner from '../components/Banner'
import MostSearchedBooks from './MostSearchedBooks'
import FavBook from './FavBook'
import SellYourBookBanner from './SellYourBookBanner'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner />
      <MostSearchedBooks/>
      <FavBook/>
      <SellYourBookBanner/>
      <Review/>
    </div>
    
  )
}

export default Home