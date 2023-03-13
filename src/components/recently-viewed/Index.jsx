import styled from "styled-components";
import RecentTitle from "./components/RecentTitle";

const StyledRecentlyViewed = styled.div`
  .recent-list {
    display: flex;
    align-items: center;
    overflow-x: scroll;
  }
`;

import RecentlyViewedItem from "./components/RecentlyViewedItem";

export default function RecentlyViewedList({ data }) {
  return (
    <StyledRecentlyViewed>
      <RecentTitle />
      <div className="recent-list">
        {data.map((brand) => (
          <RecentlyViewedItem
            brandName={brand.brandName}
            brandImage={brand.brandImage}
            key={brand.brandId}
          />
        ))}
      </div>
    </StyledRecentlyViewed>
  );
}
