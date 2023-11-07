import React from "react";
import {PageButton, PaginationContainer} from "./Pagination.styled";

export interface PaginationProps {
    totalItems: number,
    page: number,
    onPageChange: (page: number) => void,
    itemsPerPage?: number
}

const Pagination = ({totalItems, page, onPageChange, itemsPerPage = 10}: PaginationProps) => {
    const pageCount: number = Math.ceil(totalItems / itemsPerPage);

    const renderPageButton = (pageNumber : number) => {
        if (pageNumber > 0 && pageNumber <= pageCount)
            return (
                <PageButton
                    onClick={() => onPageChange(pageNumber)}
                    $isActive={pageNumber === page}
                >
                    {pageNumber}
                </PageButton>
            );
        return (<></>)
    };

    return (
        <PaginationContainer>
            {renderPageButton(Math.ceil(page - 2))}
            {renderPageButton(Math.ceil(page - 1))}
            {renderPageButton(page)}
            {renderPageButton(Math.ceil(page + 1))}
            {renderPageButton(Math.ceil(page + 2))}
        </PaginationContainer>
    )
}

export default Pagination;