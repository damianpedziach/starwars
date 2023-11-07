import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: left;
`;

export const PageButton = styled.button<{ $isActive?: boolean }>`
  background: ${({$isActive}) => $isActive ? '#8F8F8F' : '#DFE0DF'};
  height: 2rem;
  width: 2rem;
  padding: 0;
  box-shadow: none;
  border: none;
  margin: 0.5rem;

  &:hover {
    cursor: pointer;
  }
}
`