import { data } from "./data/data";
import Header from "./components/header/Index";
import PageTitle from "./components/page-title/PageTitle";
import RecentlyViewedList from "./components/recently-viewed/Index";
import ProductList from "./components/product-list/Index";
import ProductTable from "./shared-components/ProductTable";

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
