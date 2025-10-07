import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { author, bookName, category, image, rating, tags, bookId } =
    singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="relative group border-2 border-white rounded-3xl backdrop-blur-sm shadow-md hover:shadow-lg hover:border-[#23BE0A] transition-all duration-300 p-6 w-80 mx-auto bg-transparent">
        {/* Book Image */}
        <figure className="rounded-2xl overflow-hidden flex justify-center items-center p-6 bg-white/10">
          <img
            src={image}
            alt={bookName}
            className="h-[180px] object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm border border-[#23BE0A]/50 text-[#23BE0A] rounded-full bg-[#23BE0A]/10 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <h2 className="text-xl font-semibold text-white text-center leading-tight mt-4">
          {bookName}
        </h2>
        <p className="text-gray-300 text-sm text-center mt-1 mb-4">
          By <span className="text-gray-100 font-medium">{author}</span>
        </p>

        {/* Divider */}
        <div className="border-t border-white/20 my-4"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center px-2 text-white">
          <span className="text-sm font-medium border border-[#23BE0A] text-[#23BE0A] px-3 py-1 rounded-md bg-[#23BE0A]/10">
            {category}
          </span>
          <span className="flex items-center gap-1 text-[#FBBF24] font-semibold">
            {rating}
            <FaRegStarHalfStroke className="text-[#FBBF24]" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Book;
