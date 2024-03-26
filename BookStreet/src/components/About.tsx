import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className='bg-red-200'>
    <div className="max-w-4xl mt-14 mx-auto p-6 bg-red-100">
      <h1 className="text-4xl font-bold mb-8 text-center">About BookStreet</h1>
      <p className="text-lg mb-6 text-gray-800">
        Welcome to BookStreet, your ultimate destination for affordable books! With a mission to provide book enthusiasts with access to a vast selection of books at unbeatable prices, BookStreet is your go-to bookstore for all your reading needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg shadow-md p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Promise</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">Affordability: We offer the lowest prices guaranteed.</li>
            <li className="text-gray-700 mb-2">Quality: Each book is carefully selected and inspected.</li>
            <li className="text-gray-700 mb-2">Diverse Selection: From bestsellers to classics, we have something for everyone.</li>
          </ul>
        </div>
        <div className="rounded-lg shadow-md p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose BookStreet?</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">Unbeatable Prices: We pride ourselves on offering the lowest prices in town.</li>
            <li className="text-gray-700 mb-2">Exceptional Service: Our team is dedicated to providing exceptional customer service.</li>
            <li className="text-gray-700 mb-2">Fast Shipping: We offer fast and reliable shipping to get your books to you as quickly as possible.</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a href="#" className="text-blue-500 hover:text-blue-700 mr-4" title="Facebook"><FaFacebook size={32} /></a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mr-4" title="Twitter"><FaTwitter size={32} /></a>
        <a href="#" className="text-blue-500 hover:text-blue-700" title="Instagram"><FaInstagram size={32} /></a>
      </div>
      <p className="text-lg mt-8 text-center text-gray-800">Thank you for choosing BookStreet as your trusted bookstore. Happy reading!</p>
    </div>
    </div>
  );
}

export default About