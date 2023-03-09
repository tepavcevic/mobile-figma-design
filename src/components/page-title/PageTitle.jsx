import styled from "styled-components";

const StyledTitle = styled.div`
  max-width: 340px;
  text-align: center;
  margin: 25px auto;

  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }
`;

export default function PageTitle() {
  return (
    <StyledTitle>
      <h1 className="main-heading">Summer top</h1>
      <p className="main-description">
        It is those feelings that drive our love of astronomy and our desire.
      </p>
    </StyledTitle>
  );
}
