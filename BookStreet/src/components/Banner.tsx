import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwipeCards from '../Home/SwipeCards';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-red-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='md:w-1/2  space-y-8 h-full'>
                <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell your books</h2>
                <p className='md:w-4/5'>Looking for your next literary adventure? Browse our extensive collection of books available for purchase, featuring titles spanning various genres and authors. Start exploring our book marketplace today and embark on your next reading journey!</p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Find my book...' className='px-2 py-2 rounded-s-sm outline-none'/>
                    <button className='bg-orange-800 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            <div><SwipeCards/></div>
        </div>
    </div>
  )
}

export default Banner