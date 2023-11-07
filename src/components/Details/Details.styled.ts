import styled from "styled-components";

export const DetailsContainer = styled.div`
  margin: 1.25rem;
`;

export const DetailsRowContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  margin: 1rem 0;
`;

export const DetailsRowLabel = styled.div`
  font-weight: bold;
  min-width: 200px;  
`;

export const DetailsRowValue = styled.div`

`;

export const DetailsFooter = styled.div`
  button {
    padding: .5rem 1rem;
    background: #000;
    color: #fff;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
`;

export const ObjectList = styled.div`
  a {
      color:inherit;
      text-decoration: none;  
      font-weight: 600;
    }
    > *::after {
      content: " | "
    }
    > *:last-child::after {
      content: ""
    }
`;