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

export default function RecentlyViewedList({ brands }) {
  return (
    <StyledRecentlyViewed>
      <RecentTitle />
      <div className="recent-list">
        {brands.map((brand) => (
          <RecentlyViewedItem brandName={brand.name} photo={brand.photo} />
        ))}
      </div>
    </StyledRecentlyViewed>
  );
}
