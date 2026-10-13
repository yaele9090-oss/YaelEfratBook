import { Book } from './Book'

export function BookSection({ title, books, emptyMessage }) {
  return (
    <section className="books-section">
      <h2>{title}</h2>
      {
        books.length > 0 ? 
        <ul className="books-grid">
          {books.map((b, i) => <Book key={i} book={b} index={i} />)}
        </ul> : 
        <p className="no-books-msg">{emptyMessage}</p>
      }
    </section>
  )
}