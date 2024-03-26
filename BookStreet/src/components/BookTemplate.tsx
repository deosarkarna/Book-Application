import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import Cart from '../components/Cart/Cart'; // Import the Cart component

interface Book {
  _id: string;
  bookTitle: string;
  authorName: string;
  imageURL: string;
  category: string;
  bookDescription: string;
  bookPDFURL: string;
}

const BookTemplate = () => {

 const [books, setBooks] = useState<Book[]>([]);
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const [cart, setCart] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Book[]>('http://localhost:4000/allBooks');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const truncateDescription = (description: string, maxLength: number): string => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  }

  const handleCart = (book: Book) => {
    setCart(prevCart => [...prevCart, book]);
     
    console.log("Added to cart:", book);
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={book.imageURL} alt={book.bookTitle} onLoad={handleImageLoad} className="w-full h-64 object-cover object-center" />
            <div className="p-4">
            <Link key={book._id} to={`/book/${book._id}`}>
              <h2 className="text-xl font-semibold mb-2">{truncateDescription(book.bookTitle, 15)}</h2>
              <p className="text-b-gray-800 mb-2">{book.authorName}</p>
              <p className="text-gray-600 mb-2">{book.category}</p>
              <p className="text-gray-700">{truncateDescription(book.bookDescription,121)}</p>
            </Link>
              <button className='w-full bg-blue-300 focus:ring-4 rounded-md text-center font-bold hover:bg-orange-400 my-2 relative group' onClick={() => handleCart(book)}>
              <FaPlus className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Price $1.99 only
              </button>
            </div> 
            
          </div>
        ))}
        {/* {isLoading && <p>Loading...</p>} */}
      </div>
      <Cart cart={cart} />
       {/* Pass the cart data as a prop to the Cart component */}
    </div>
    
  )
}

export default BookTemplate;
