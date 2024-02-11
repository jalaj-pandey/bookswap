import React from 'react'
import { Link } from 'react-router-dom'
import bookpic from '../assets/awardbooks.png'

const SellYourBookBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Sell Your Old Books Here</h2>
                <Link to = "/shop" className='mt-12 block'><button className='bg-rose-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Sell Here</button></Link>
            </div>
            <div className='w-96'>
                <img src={bookpic} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SellYourBookBanner