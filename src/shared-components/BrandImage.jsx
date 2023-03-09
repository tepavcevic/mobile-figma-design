import styled from "styled-components";

const StyledImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  height: 80px;
  border-radius: 50%;
`;

export default function BrandImage({ src }) {
  return <StyledImage src={src} />;
}
