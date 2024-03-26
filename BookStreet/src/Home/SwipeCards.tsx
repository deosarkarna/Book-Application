import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './SwipeCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const SwipeCards = () => {
  return (
    <div className='banner'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://media.gq-magazine.co.uk/photos/637cfcd1791241f7609471e1/master/w_320%2Cc_limit/best_books_0002_Caleb_Azumah_Nelson.jpeg' /></SwiperSlide>
        <SwiperSlide><img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRDQA4AEHBp5DKrQS5jAAAkLDSGXnTfFfD1hvyLL1BI6dztwzib' /></SwiperSlide>
        <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR819TtvIV0JJ5_Wzzfcnk3y2eXfPpamZmdbrg5ofv0Ydafpw_f' /></SwiperSlide>
        <SwiperSlide><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWOvWV-UtYvY2Qu57SAEGFDMsvxmxU3JjUgPh2_6GgS_6rGUyU' /></SwiperSlide>
        <SwiperSlide><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyNqBqhFMWaotNAuKKWHRSZOUyCpXTNM8tCFMNXmfWtfv-cv98' /></SwiperSlide>
        {/* <SwiperSlide><img src='https://media.gq-magazine.co.uk/photos/637cfcd1791241f7609471e1/master/w_320%2Cc_limit/best_books_0002_Caleb_Azumah_Nelson.jpeg' /></SwiperSlide>
        <SwiperSlide><img src='https://media.gq-magazine.co.uk/photos/637cfcd1791241f7609471e1/master/w_320%2Cc_limit/best_books_0002_Caleb_Azumah_Nelson.jpeg' /></SwiperSlide>
        <SwiperSlide><img src='https://media.gq-magazine.co.uk/photos/637cfcd1791241f7609471e1/master/w_320%2Cc_limit/best_books_0002_Caleb_Azumah_Nelson.jpeg' /></SwiperSlide>
        <SwiperSlide><img src='https://media.gq-magazine.co.uk/photos/637cfcd1791241f7609471e1/master/w_320%2Cc_limit/best_books_0002_Caleb_Azumah_Nelson.jpeg' /></SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default SwipeCards