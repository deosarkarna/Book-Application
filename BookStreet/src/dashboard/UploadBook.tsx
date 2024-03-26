import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {

  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Fantacy",
    "Horror",
    "Science-Fiction",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-Help",
    "Business",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategory[0])

  const handleChangeSelectedValue = (event) =>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj ={
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL

    }
    // console.log(bookObj)
    //upload call

    fetch("http://localhost:4000/uploadBook", {
    method: "POST",
    headers: {
      "content-type":"application/json"
    },
    body:JSON.stringify(bookObj)
  }
    ).then(res=>res.json()).then(data=>{
      alert("Book Uploaded !!!")
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-blue-800'>Upload a book</h2>
      <form onSubmit={handleBookSubmit} className="flex w-full flex-wrap gap-4">
      <div className=''>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book image URL" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="inputCat" value="Book Category" />
        </div>
        <Select id='inputCat' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategory.map((option)=><option key={option} value={option}>{option}</option>)
          }
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' className='w-full' placeholder="Book image URL" rows={4} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book pdf URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book pdf URL" required />
      </div>
      <Button type="submit" className='mt-5 text-black bg:blue-700 hover:blue-700'>Upload Book</Button>
      </div>
      
    </form>
    </div>
  )
}

export default UploadBook