import React from 'react'
import { useLoaderData } from 'react-router-dom'

interface BookData {
  _id: string;
  bookTitle: string;
  authorName: string;
  imageURL: string;
  category: string;
  bookDescription: string;
  bookPDFURL: string;
}

const BookDisplay = () => {

    const {_id, bookTitle, authorName, imageURL, category,bookDescription,bookPDFURL} = useLoaderData() as BookData;

  return (
    <div className='book-container mt-16 bg-purple-100 font-bold'>BookDisplay
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl flex">
      <img className="h-full w-1/3 object-cover" src={imageURL} alt={bookTitle} />
      <div className="p-6 flex flex-col justify-between w-2/3">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{bookTitle}</h2>
          <p className="text-gray-600 mt-2"><strong>Author:</strong> {authorName}</p>
          <p className="text-gray-600"><strong>Category:</strong> {category}</p>
        </div>
        <p className="mt-4">{bookDescription}</p>
        <a className="mt-4 block text-center bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" href={bookPDFURL} target="_blank" rel="noopener noreferrer">View PDF</a>
      </div>
    </div>
    </div>
  )
}

export default BookDisplay