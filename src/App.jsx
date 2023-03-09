import "./App.css";

import { products } from "./data/products";
import { brands } from "./data/brands";
import Header from "./components/header/Header";
import PageTitle from "./components/page-title/PageTitle";
import RecentlyViewedList from "./components/recently-viewed/RecentlyViewedList";
import ProductList from "./components/product-list/ProductList";
import styled from "styled-components";

const ProductTable = styled.div`
  overflow-x: scroll;
  margin-bottom: 20px;
  border-color: rgba(60, 60, 67, 0.29);
  border-style: solid;
  border-width: 1px 0 0 0;
`;

const nikeBrand = brands.find((brand) => brand.name === "Nike");
const adidasBrand = brands.find((brand) => brand.name === "Adidas");
const nikeProducts = products.filter((product) => product.brand === "Nike");
const adidasProducts = products.filter((product) => product.brand === "Adidas");

function App() {
  return (
    <div className="App">
      <Header />

      <RecentlyViewedList brands={brands} />

      <PageTitle />

      <ProductTable>
        <ProductList productBrand={nikeProducts} shoeBrand={nikeBrand} />
        <ProductList productBrand={adidasProducts} shoeBrand={adidasBrand} />
      </ProductTable>
    </div>
  );
}

export default App;
