import styled from "styled-components";

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

export default function RecentlyViewedItem({ brandName, photo }) {
  return (
    <Item>
      <img src={photo} alt={`${brandName} logo`} className="round-picture" />
      <p>{brandName}</p>
    </Item>
  );
}
