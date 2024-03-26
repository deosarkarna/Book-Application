import React from 'react'
import Banner from '../components/Banner'
import BookTemplate from '../components/BookTemplate'

const Home = () => {
  return (
    <div className='bg-purple-100'>
      <Banner/>
      <div className='flex justify-center mx-auto max-w-screen-lg px-4'>
        <BookTemplate/>
      </div>
      
    </div>
  )
}

export default Home