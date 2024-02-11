import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const EditBook = () => {
  const {id} = useParams();
  const {bookTitle, author, imageURL, category, bookDescription, bookPrice, sellerID} = useLoaderData();
  const bookCategoires = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Prepration",
    "School Books",
    "Science Fiction",
    "Fantasy",
    "Religion",
    "Horror",
    "Romance",
    "Thriller",
    "History",
    "Autobiography",
    "Self-help",
    "Travel",
    "Business",
    "Children Books",
    "Art and Design",
  ]
  const [selectedBookCategory, setselectedBookCategory] = useState(bookCategoires[0]);
  const handleChangeSelectedValue = (e) => {
    // console.log(e.target.value);
    setselectedBookCategory(e.target.value)
  }

  // book submissions (UPLOAD)
  const handleBookUpdate = (e) => {
    e.preventDefault();
  const form = e.target;

  const bookTitle = form.bookTitle.value;
  const author = form.author.value;
  const imageURL = form.imageURL.value;
  const category = form.categoryName.value;
  const bookDescription = form.bookDescription.value;
  const bookPrice = form.bookPrice.value;
  const sellerID = form.sellerID.value;

  const updateBookObject = {
    bookTitle, author, imageURL, bookDescription,category, bookPrice, sellerID
  }
  // sending data to DB
  fetch(`http://localhost:5000/book/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateBookObject)
  }).then(res => res.json()).then(data => {
    alert("Book Updated Successfully")
    form.reset(); 
    
  })

  

}

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit a Book</h2>
      <form onSubmit={handleBookUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* FIRST ROW */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Your Book Title"
              defaultValue={bookTitle}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput
              id="author"
              type="text"
              name="author"
              defaultValue={author}
              placeholder="Book Author"
              required
            />
          </div>
        </div>
        {/* SECOND ROW */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              name="imageURL"
              defaultValue={imageURL}
              placeholder="Book Image URL"
              required
            />
          </div>
          {/* Category */}
          <div className="lg:w-1/2">
             <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <select name="categoryName" id="inputState" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookCategoires.map((option) => <option key={option} value={option}>{option}</option>)
            }
            </select>
            </div>
          </div>
        </div>
        {/* THIRD ROW */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id="bookDescription" name="bookDescription" placeholder="Book Description" defaultValue={bookDescription} required rows={4} />
            
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPrice" value="Book Price (₹)" />
            </div>
            <TextInput
              id="bookPrice"
              type="number"
              name="bookPrice"
              defaultValue={bookPrice}
              placeholder="Book Price"
              required
            />
          </div>
          {/* seller email */}
          
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="sellerID" value="Seller Email" />
            </div>
            <TextInput
              id="sellerID"
              type="gmail"
              name="sellerID"
              defaultValue={sellerID}
              placeholder="seller@gmail.com"
              required
            />
          </div>
        </div>

        <Button type="submit">Update Book</Button>
      </form>
    </div>
  );
}

export default EditBook