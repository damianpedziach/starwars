import React from "react";
import {useParams} from "react-router-dom";
import Details from "../../components/Details/Details";
import {getCharacter} from "../../services/getCharacters";
import {ObjectType} from "../../interfaces/ObjectType";
import {detailsMapping} from "./details.mapping";

const CharacterDetails = () => {
    const {id} = useParams();

    return (
        <>
            {!!id && (
                <Details
                    getDetails={getCharacter}
                    objectType={ObjectType.CHARACTER}
                    id={+id}
                    detailsMapping={detailsMapping}
                />
            )}
        </>
    )
}

export default CharacterDetails;