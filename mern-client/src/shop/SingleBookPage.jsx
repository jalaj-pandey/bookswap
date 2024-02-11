import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBookPage = () => {
    const { bookTitle, bookDescription,imageURL,bookPrice} = useLoaderData();
  return <div className="mt-28 px-4 lg:px-24">
    <h1> <b>{bookTitle}</b></h1>
    <h2>{bookDescription}</h2>
    <img className="h-96 m-4" src={imageURL} alt="" />
    <h2><b>₹{bookPrice}</b></h2>

    </div>;
};

export default SingleBookPage;
