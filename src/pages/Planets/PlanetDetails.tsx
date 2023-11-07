import React from "react";
import {useParams} from "react-router-dom";
import Details from "../../components/Details/Details";
import {getPlanet} from "../../services/getPlanets";
import {ObjectType} from "../../interfaces/ObjectType";
import {detailsMapping} from "./details.mapping";

const PlanetDetails = () => {
    const {id} = useParams();

    return (
        <>
            {!!id && (
                <Details
                    getDetails={getPlanet}
                    objectType={ObjectType.PLANET}
                    id={+id}
                    detailsMapping={detailsMapping}
                    />
            )}
        </>
    )
}

export default PlanetDetails;