import styled from "styled-components";
import BrandImage from "../../../shared-components/BrandImage";
import HeartIcon from "../../../shared-components/HeartIcon";

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
`;

export default function ProductBrand({ brand, numberOfItems, brandImage }) {
  return (
    <ProductBrandCard>
      <BrandImage src={brandImage} alt={brand} />
      <p className="product-brand-card-title">{brand}</p>
      <p className="product-brand-card-items">{numberOfItems} items</p>
      <HeartIcon />
    </ProductBrandCard>
  );
}
