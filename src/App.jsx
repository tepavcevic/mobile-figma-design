import './App.css'
import ProductsList from './components/ProductsList'
import RecentlyViewedList from "./components/RecentlyViewedList"

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="page-title">Sneakers</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="search-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </header>

      <main>
        <RecentlyViewedList />

        <h1>Summer top</h1>

        <ProductsList />
      </main>
    </div>
  )
}

export default App
