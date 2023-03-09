import styled from "styled-components";

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 163px;

  .product-image {
    width: 100%;
  }
`;

const ProductCardBody = styled.div`
  height: 131px;
  text-align: center;
  border-color: rgba(60, 60, 67, 0.29);
  border-style: solid;
  border-width: 0 1px 1px 0;

  .product-model-title {
    width: 60%;
    margin: 18px auto;
    font-size: 15px;
    font-weight: 500;
  }
`;

export default function Product({ model, price, modelImage }) {
  return (
    <ProductCard>
      <img
        className="product-image"
        src={modelImage}
        alt="sneaker model image"
      />
      <ProductCardBody>
        <p className="product-model-title">{model}</p>
        <p className="product-model-price">${price}</p>
      </ProductCardBody>
    </ProductCard>
  );
}
