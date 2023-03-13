import styled from "styled-components";

const Table = styled.div`
    overflow-x: scroll;
    margin-bottom: 20px;
    border-color: rgba(60, 60, 67, 0.29);
    border-style: solid;
    border-width: 1px 0 0 0;
`;

export default function ProductTable({ children }) {
    return(<Table>{children}</Table>);
}