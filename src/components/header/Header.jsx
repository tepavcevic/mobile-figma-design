import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background-color: #f2f2f7;

  h2 {
    display: inline;
    align-self: center;
    font-size: 17px;
    font-weight: 400;
    padding: 10px;
  }

  svg {
    width: 22px;
    padding-right: 10px;
  }

  div {
    width: 32px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div></div>
      <h2>Sneakers</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="search-icon"
      >
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </StyledHeader>
  );
}
