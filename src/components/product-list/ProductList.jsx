import styled from "styled-components";
import Product from "./components/Product";
import ProductBrand from "./components/ProductBrand";

const List = styled.div`
  display: flex;
  align-items: center;
`;

export default function ProductList({ productBrand, shoeBrand }) {
  return (
    <List>
      <ProductBrand
        brandImage={shoeBrand.photo}
        brand={shoeBrand.name}
        numberOfItems={productBrand.length}
      />

      <List>
        {productBrand.slice(0, 3).map((shoe) => (
          <Product
            model={shoe.model}
            price={shoe.price}
            modelImage={shoe.modelImage}
          />
        ))}
      </List>
    </List>
  );
}
