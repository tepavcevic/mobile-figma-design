import styled from "styled-components";
import Product from "./components/Product";
import ProductBrand from "./components/ProductBrand";

const List = styled.div`
  display: flex;
  align-items: center;
`;

export default function ProductList({ brand }) {
  return (
    <>
      {brand.products && (
        <List>
          <ProductBrand
            brandImage={brand.brandImage}
            brand={brand.brandName}
            numberOfItems={brand.products.length}
          />

          <List>
            {brand.products.slice(0, 3).map((product) => (
              <Product product={product} key={product.productId} />
            ))}
          </List>
        </List>
      )}
    </>
  );
}
