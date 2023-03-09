import styled from "styled-components";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  h3 {
    font-weight: 500;
  }
`;

export default function RecentTitle() {
  return (
    <Title>
      <h3>Recently viewed</h3>
      <p>See All</p>
    </Title>
  );
}
