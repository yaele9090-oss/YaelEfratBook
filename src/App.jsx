import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BookSection } from './components/BookSection'

function App() {
  const books = [
    {title: 'Eli lomed', author: 'Fux', likes: 200, isAvailable: true},
    {title: 'my day', author: 'Fux', likes: 35, isAvailable: true},
    {title: 'the cat', author: 'Cohen', likes: 300, isAvailable: false}
  ]
  const recomandBooks = books.filter((book) => book.likes > 150)

  return (
    <div className="store-container">
      <header className="store-header">
        <h1>Book Store 📖</h1>
      </header>

      <main>
        <BookSection 
          title="All Books 📚" 
          books={books} 
          emptyMessage="There is no books 😔" 
        />

        <BookSection 
          title="Recomand Books 😁" 
          books={recomandBooks} 
          emptyMessage="There is no recomand books 😏" 
        />
      </main>
    </div>
  )
}

export default App