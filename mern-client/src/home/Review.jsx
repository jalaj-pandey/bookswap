import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from 'flowbite-react';
import profile from '../assets/profile.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

//React Icons
import {FaStar} from 'react-icons/fa6'

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Happy Readers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facere, sed velit consectetur labore dolores suscipit nisi nemo eius ea autem in rem sapiente asperiores saepe magnam at impedit sequi.</p>
                <Avatar img={profile} rounded bordered className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Jalaj Pandey</h5>
                <p className='text-base'>CEO</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facere, sed velit consectetur labore dolores suscipit nisi nemo eius ea autem in rem sapiente asperiores saepe magnam at impedit sequi.</p>
                <Avatar img={profile} rounded bordered className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Jalaj Pandey</h5>
                <p className='text-base'>CEO</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facere, sed velit consectetur labore dolores suscipit nisi nemo eius ea autem in rem sapiente asperiores saepe magnam at impedit sequi.</p>
                <Avatar img={profile} rounded bordered className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Jalaj Pandey</h5>
                <p className='text-base'>CEO</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facere, sed velit consectetur labore dolores suscipit nisi nemo eius ea autem in rem sapiente asperiores saepe magnam at impedit sequi.</p>
                <Avatar img={profile} rounded bordered className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Jalaj Pandey</h5>
                <p className='text-base'>CEO</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default Review