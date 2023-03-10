import { data } from "./data/data";
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

function App() {
  return (
    <div className="App">
      <Header />

      <RecentlyViewedList data={data} />

      <PageTitle />

      <ProductTable>
        {data.map((brand) => (
          <ProductList brand={brand} key={brand.brandId} />
        ))}
      </ProductTable>
    </div>
  );
}

export default App;
