import './App.css'

import { products } from "./data/products"
import { brands } from "./data/brands"
import Header from "./components/header/Header"
import RecentlyViewedList from "./components/recently-viewed/RecentlyViewedList"
import ProductList from './components/product-list/ProductList'

const nikeBrand = brands.find(brand => brand.name === "Nike");
const adidasBrand = brands.find(brand => brand.name === "Adidas");
const nikeProducts = products.filter(product => product.brand === "Nike");
const adidasProducts = products.filter(product => product.brand === "Adidas"); 

function App() {
  return (
    <div className="App">
      <Header />

      <RecentlyViewedList brands={brands}/>

      <div className="main-slogan">
        <h1 className="main-heading">Summer top</h1>
        <p className="main-description">It is those feelings that drive our love 
          of astronomy and our desire.</p>
      </div>

      <div className="products-list">
        <ProductList productBrand={nikeProducts} shoeBrand={nikeBrand} />

        <ProductList productBrand={adidasProducts} shoeBrand={adidasBrand}/>
      </div>
    </div>
  )
}

export default App
