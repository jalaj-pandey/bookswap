import React from 'react'
import FavBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" />
        </div>    
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-rose-500'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus nisi illum exercitationem quis nobis quo nam odit maiores id debitis vero ullam, assumenda maxime ad voluptates cupiditate ratione ea.</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>30+</h3>
                    <p className='text-bold'> Book listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>20+</h3>
                    <p className='text-bold'> Registered Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>10+</h3>
                    <p className='text-bold'> PDF Downloads</p>
                </div>
            </div>
            <Link to = "/shop" className='mt-12 block'><button className='bg-rose-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>    
    </div>
  )
}

export default FavBook