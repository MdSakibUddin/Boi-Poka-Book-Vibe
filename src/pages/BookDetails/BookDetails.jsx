import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBookData = data.find((bookData) => bookData.bookId === bookId);

  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    rating,
    yearOfPublishing,
  } = singleBookData;

  return (
    <div className="w-10/12 md:w-3/4 lg:w-2/3 mx-auto mt-12 mb-16 bg-base-200 rounded-2xl shadow-lg p-8">
      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            className="w-72 h-[420px] object-cover rounded-2xl border-2 border-white shadow-md hover:scale-105 transition-transform duration-300"
            src={image}
            alt={bookName}
          />
        </div>

        {/* Book Info */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {bookName}
          </h3>

          <h4 className="text-white border-b border-gray-300 pb-2 pt-3 text-lg">
            <span className="font-semibold text-gray-700">By:</span> {author}
          </h4>

          <h4 className="text-[#23BE0A] border-b border-gray-300 pb-2 pt-3 font-medium">
            {category}
          </h4>

          <p className="text-white text-justify leading-relaxed pt-3">
            <span className="font-semibold text-green-500">Review:</span>{" "}
            {review}
          </p>

          {/* Tags */}
          <div className="pt-4 pb-6 border-b border-gray-300">
            <span className="font-bold text-white mr-4">Tags:</span>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="inline-block px-3 py-1 text-sm border border-[#23BE0A]/60 text-[#23BE0A] rounded-full font-medium mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Extra Info + Buttons */}
          <div className="pt-4 text-white space-y-2">
            <p>
              <span className="font-semibold text-white">Total Pages:</span>{" "}
              {totalPages}
            </p>
            <p>
              <span className="font-semibold text-white">Publisher:</span>{" "}
              {publisher}
            </p>
            <p>
              <span className="font-semibold text-white">
                Year of Publishing:
              </span>{" "}
              {yearOfPublishing}
            </p>
            <p className="pb-4 border-b border-gray-300">
              <span className="font-semibold text-white">Rating:</span>{" "}
              <span className="text-yellow-500 font-bold">{rating}★</span>
            </p>

            {/* Buttons directly under Rating */}
            <div className="flex flex-col sm:flex-row justify-start gap-4 pt-4">
              <button className="btn bg-[#23BE0A] hover:bg-[#1fa108] text-white px-8 border-none">
                Read
              </button>
              <button className="btn bg-[#59C6D2] hover:bg-[#084147] text-white px-8 border-none">
                WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
