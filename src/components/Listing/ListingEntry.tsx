import React from 'react';
import {
    ListingEntryHeader,
    ListingEntryContainer,
    ListingEntryReadMoreButton,
    ListingEntryShortcut
} from "./Listing.styled";
import {getIdFromObjectUrl, getRandomColor} from "../../utils/helpers";
import {RandomImage} from "../../pages/Layout.styled";
import {Link} from "react-router-dom";
import {getDetailsPath} from "../../routes";
import {ObjectType} from "../../interfaces/ObjectType";

function ListingEntry<Object extends { name: string, url: string, objectType: ObjectType }>({name, url, objectType}: Object) {
    const id = +getIdFromObjectUrl(url);
    return (
        <ListingEntryContainer>
            <RandomImage $backgroundColor={getRandomColor()}/>
            <ListingEntryShortcut>
                <ListingEntryHeader>{name}</ListingEntryHeader>
                <Link to={getDetailsPath(id, objectType)}>
                    <ListingEntryReadMoreButton>
                        Read More
                    </ListingEntryReadMoreButton>
                </Link>

            </ListingEntryShortcut>
        </ListingEntryContainer>
    )
}

export default ListingEntry;