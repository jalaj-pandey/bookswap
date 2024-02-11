import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books/")
    .then((res) => res.json())
    .then((data) => {
        setAllBooks(data);
      });
  },[]);
  // Delete a Book
  const handleDelete =(id)=>{
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
      body: JSON.stringify({id})
    }).then(res => res.json()).then(data => {
      alert("Book Deleted Successfully")
      
    })
  }
  return (
    <div className='px-4 my-12'>
      {/* TABLE FOR BOOK DATA */}
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <Table hoverable className='lg:w-[1180px]'>
      <Table.Head>
        <Table.HeadCell>No.</Table.HeadCell>
        <Table.HeadCell>Book Title</Table.HeadCell>
        <Table.HeadCell>Book Author</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price (₹)</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}> 
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>{index+1}</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {book.bookTitle}
          </Table.Cell>
          <Table.Cell>{book.author}</Table.Cell>
          <Table.Cell>{book.category}</Table.Cell>
          <Table.Cell>{book.bookPrice}</Table.Cell>
          <Table.Cell>
            <button className='bg-cyan-800 px-4 py-1 font-semibold text-white rounded-sm hover:bg-teal-500 mr-5'>
            <Link to={
              `/admin/dashboard/edit-book/${book._id}`
            } >
              Edit
            </Link></button>
            <button onClick={()=>{handleDelete(book._id)}} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-teal-500'>Delete</button>
          </Table.Cell>
        </Table.Row>
          </Table.Body>)
        }
    </Table>
      
    </div>
  )
}

export default ManageBooks