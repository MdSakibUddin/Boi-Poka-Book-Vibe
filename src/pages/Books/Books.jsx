import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ booksData }) => {
  //   const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("../../../public/data/booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);

  //   const bookPromise = fetch("../../../public/data/booksData.json").then((res) =>
  //     res.json()
  //   );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Books</h1>
      <Suspense
        fallback={<span className="loading loading-ball text-success"></span>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-11/12 mx-auto">
          {booksData.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
