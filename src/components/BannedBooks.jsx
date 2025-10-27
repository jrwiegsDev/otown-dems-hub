// src/components/BannedBooks.jsx

import { useState } from 'react';
import './BannedBooks.css';

const BannedBooks = () => {
  const books = [
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
    { title: "1984", author: "George Orwell" },
    { title: "Animal Farm", author: "George Orwell" },
    { title: "A People's History of the United States", author: "Howard Zinn" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood" },
    { title: "It Can't Happen Here", author: "Sinclair Lewis" },
    { title: "Hunger Games series", author: "Suzanne Collins" },
    { title: "How to Stand Up to a Dictator", author: "Maria Ressa" },
    { title: "On Tyranny: 20 Lessons from the 20th Century", author: "Timothy Snyder" },
    { title: "Rest is Resistance: A Manifesto", author: "Tricia Hersey" },
    { title: "Attack from Within: How Disinformation is Sabotaging America", author: "Barbara McQuade" },
    { title: "Misbelief: What Makes Rational People Believe Irrational Things", author: "Dan Ariely" },
    { title: "Killer Underwear Invasion! How to Spot Fake News, Disinformation & Conspiracy Theories", author: "Elise Gravel" },
    { title: "The Presidents and the People: Five Leaders who Threatened Democracy and the Citizens who Fought to Defend It", author: "Corey Brettschneider" },
    { title: "Strongmen: Mussolini to the Present", author: "Ruth Ben-Ghiat" },
    { title: "Fascism: A Warning", author: "Madeline Albright" },
    { title: "Prequel: An American Fight Against Freedom", author: "Rachel Maddow" }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="banned-books-container">
      <h2>📚 Banned Books Directory</h2>
      <p className="banned-books-intro">
        Support intellectual freedom by donating these books to local little free libraries. 
        Help combat censorship and promote democratic ideals in our community.
      </p>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="book-search-input"
        />
        {searchTerm && (
          <button onClick={handleClear} className="clear-button">
            Clear
          </button>
        )}
      </div>

      <div className="books-list-container">
        {filteredBooks.length > 0 ? (
          <table className="books-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-results">No books found matching "{searchTerm}"</p>
        )}
      </div>

      <p className="books-count">
        Showing {filteredBooks.length} of {books.length} books
      </p>
    </div>
  );
};

export default BannedBooks;
