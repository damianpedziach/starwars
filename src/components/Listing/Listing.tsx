import React, {useEffect, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import ListingEntry from "./ListingEntry";
import {ListResponse} from "../../services/listResponse";
import {ObjectType as ObjectTypeEnum} from "../../interfaces/ObjectType";
import Pagination from "../Pagination";
import {
    ListingContainer,
    ListingEntryList,
    ListingFooter,
    ListingFooterInformation
} from "./Listing.styled";
import {PageHeader} from "../../pages/Layout.styled";


interface ListingProps<ObjectType> {
    getItems: (page: number) => Promise<ListResponse & { results: ObjectType[] }>,
    objectType: ObjectTypeEnum,
    listTitle: string
}

function Listing<ObjectType extends { name: string, url: string }>({getItems, objectType, listTitle}: ListingProps<ObjectType>) {
    const [items, setItems] = useState<ObjectType[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const query = useQuery({queryKey: [objectType, page], queryFn: () => getItems(page)})
    const {data, isLoading} = query

    useEffect(() => {
        if (!data) return;
        const {count, results} = data;
        setTotalItems(count);
        setItems(results);
    }, [data]);

    const handlePageChange = (page: number) => {
        setPage(page);
        window.scrollTo(0,0);
    }

    return (
        <ListingContainer>
            <PageHeader>{listTitle}</PageHeader>
            <ListingEntryList>
                {!!items && !isLoading && items.map(item => (
                    <ListingEntry key={item.url} {...item} objectType={objectType} />
                ))}
                {isLoading && (
                    <>Loading...</>
                )}
            </ListingEntryList>
            <ListingFooter>
                <Pagination
                    totalItems={totalItems}
                    page={page}
                    onPageChange={handlePageChange}
                />
                <ListingFooterInformation>
                    {!!items && items.length > 0 && (
                        <span>Found: {totalItems}. Showing {items.length} of {totalItems}</span>
                    )}
                </ListingFooterInformation>
            </ListingFooter>
        </ListingContainer>
    )
}

export default Listing;