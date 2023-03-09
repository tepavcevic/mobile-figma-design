import styled from "styled-components";
import BrandImage from "../../../shared-components/BrandImage";

const Item = styled.div`
  display: block;
  padding: 0 12px;
  margin: auto;
  text-align: center;

  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }

  p {
    font-size: 17px;
    margin-top: 5px;
  }
`;

export default function RecentlyViewedItem({ brandName, brandImage }) {
  return (
    <Item>
      <BrandImage src={brandImage} alt={brandName} />
      <p>{brandName}</p>
    </Item>
  );
}
