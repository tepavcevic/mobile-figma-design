import './App.css'
import { products } from "./data/products"
import { brands } from "./data/brands"
import ProductsList from './components/ProductsList'
import ProductsBrand from "./components/ProductsBrand"
import RecentlyViewedList from "./components/RecentlyViewedList"

const nike = products.filter(product => product.brand === "Nike");
const adidas = products.filter(product => product.brand === "Adidas"); 

function App() {
  return (
    <div className="App">
      <header className="header">
        <div></div>
        <h2 className="page-title">Sneakers</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="search-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </header>

      <main className="container">

        <RecentlyViewedList />

        <div className="main-slogan">
        <h1 className="main-heading">Summer top</h1>
        <p className="main-description">It is those feelings that drive our love 
          of astronomy and our desire.</p>
        </div>

        <div className="products-list">
          <ProductsBrand 
              brandImage={brands[0].photo}
              brand={brands[0].name}
              numberOfItems={nike.length}
          />
          {nike.slice(0, 2).map(shoe =>
            <ProductsList
              model={shoe.model}
              price={shoe.price}
            />
          )}
        </div>
        
      </main>
    </div>
  )
}

export default App
