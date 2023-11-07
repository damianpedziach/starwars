import React from "react";
import Listing from "../../components/Listing/Listing";
import {getPlanets} from "../../services/getPlanets";
import {ObjectType} from "../../interfaces/ObjectType";
import {Planet} from "../../interfaces/Planet";
import {pathTitles} from "../../routes";

const PlanetList = () => {
    return (
        <Listing<Planet>
            getItems={getPlanets}
            objectType={ObjectType.PLANET}
            listTitle={pathTitles.PLANETS}
            />
    )
}

export default PlanetList;