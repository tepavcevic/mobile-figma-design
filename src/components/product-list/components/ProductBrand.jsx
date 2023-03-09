import styled from "styled-components";

const ProductBrandCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 36px 41px;
  border-color: rgba(60, 60, 67, 0.29);
  border-style: solid;
  border-width: 0 1px 1px 0;

  .product-brand-card-title {
    font-size: 15px;
    font-weight: 500;
    margin: 8px 0 0 0;
  }

  .product-brand-card-items {
    font-size: 13px;
    margin: 0 0 34px 0;
  }

  .heart-icon {
    width: 28px;
  }
`;

export default function ProductBrand({ brand, numberOfItems, brandImage }) {
  return (
    <ProductBrandCard>
      <img
        className="round-picture"
        src={brandImage}
        alt={`${brandImage} logo`}
      />
      <p className="product-brand-card-title">{brand}</p>
      <p className="product-brand-card-items">{numberOfItems} items</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.3"
        stroke="#FF3B30"
        className="heart-icon"
      >
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </ProductBrandCard>
  );
}
