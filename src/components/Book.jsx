import './Book.css'

export function Book({ book, index }) {
  const isPopular = book.likes > 100;

  return (
    <li className={`book-card ${isPopular ? 'popular-book' : ''} ${!book.isAvailable ? 'unavailable-book' : ''}`}>
      <div className="book-info">
        <p><strong>title:</strong> {book.title}</p>
        <p><strong>author:</strong> {book.author}</p>
        <p><strong>likes:</strong> {book.likes}</p>
        <p className="book-id">Id: {index}</p>
      </div>

      <div className="book-notices">
        {
          book.likes > 100 && <p className="notice-recomand">Recomand Books 👌</p> 
        }
        {
          !book.isAvailable && <p className="notice-unavailable">This book isn't available 🤷‍♀️</p> 
        }
      </div>
    </li>
  )
}