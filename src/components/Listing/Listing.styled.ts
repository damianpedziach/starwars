import styled from "styled-components";
import {PaginationContainer} from "../Pagination.styled";
import {RandomImage} from "../../pages/Layout.styled";

export const ListingContainer = styled.div`
  margin: 1.25rem;
`;
export const ListingEntryList = styled.div`
  
`;
export const ListingEntryContainer = styled.div`
  display: grid;
  margin: 1.25rem 0;
  grid-template-columns: 12.5rem auto;

  @media (max-width: 767px) {
    grid-template-columns: auto;
    
    ${RandomImage}{
      margin: 0 auto;
    }
  }
`;

export const ListingEntryHeader = styled.div`
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
`;

export const ListingEntryShortcut = styled.div`
    padding: 1rem;
      @media (max-width: 767px) {
        text-align: center;
      }
`;

export const ListingEntryReadMoreButton = styled.button`
  padding: .5rem 1rem;
  background: #000;
  color: #fff;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const ListingFooter = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  margin: 1.25rem 1.25rem 1.25rem 0.625rem;
  padding-bottom: 1rem;

  @media (max-width: 767px) {
    grid-template-columns: auto;
    
    ${PaginationContainer}{
      margin: 0 auto 1rem auto;
    }
  }
`;

export const ListingFooterInformation = styled.div`
  text-align: right;
  
  @media (max-width: 767px) {
    text-align: center;
  }
`