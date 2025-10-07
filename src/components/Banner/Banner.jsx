import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-base-200 p-12 rounded-2xl shadow-lg w-11/12 mx-auto my-8">
      <div className="space-y-4 text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-green-500 hover:bg-green-700 cursor-pointer mt-6 text-white">
          View The List
        </button>
      </div>

      <div className="md:w-1/2 flex justify-end mt-6 md:mt-0">
        <img
          className="w-3/4 md:w-2/3 rounded-xl shadow-md"
          src={bookImage}
          alt="Bookshelf banner"
        />
      </div>
    </div>
  );
};

export default Banner;
