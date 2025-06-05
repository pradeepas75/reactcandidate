import React,{ useState } from 'react';
import './Book.css';



const Book = () => {
  const [selectBook, setSelectBook] = useState();

  const books = [
    {
      id: 1,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEImkAAmZMgHJg2Cq6QRJvpPTZq733-b_Cag&s",
      content: "Enter for a chance to win one of ten advance copies! 'You’ll never think about lumberjacks the same way.'—Susan Marks, author of Finding Betty Crocker.",
    },
    {
      id: 2,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbs6z3wr5k2Phj9IzikDo3EunFBFTH4fO06g&s",
      content: "History is the discovery, add this collection, organization, and presentation of information about past events. Scholars who write about history are called historians.",
    },
    {
      id: 3,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_mw7ui-I8Nsa28LjmZkv8sq3r3Z_woGFqA&s",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos. Odit corrupti unde cumque iusto maiores deleniti ea, commodi minima.",
    },
    {
      id: 4,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tf616NBg9OOUqyGNeBuJ-h8hKdb7nTuxWg&s",
      content: "Historians debate the nature of history and its usefulness, including the patterns of cause and effect that determine events.",
    },
  ];

  return (
    <div className="container">
      <h1>Book Collection</h1>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book" onClick={() => setSelectBook(book)} >
            <img src={book.imgSrc} alt="Book" className="book-img" />
          </div>
        ))}
      </div>
      {selectBook && (
        <div className="book-content">
          <h2>Book Details</h2>
          <p>{selectBook.content}</p>
          <button onClick={() => setSelectBook()}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Book;
