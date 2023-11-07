import React from "react";
import Listing from "../../components/Listing/Listing";
import {getCharacters} from "../../services/getCharacters";
import {Character} from "../../interfaces/Character";
import {ObjectType} from "../../interfaces/ObjectType";
import {pathTitles} from "../../routes";

const CharacterList = () => {
    return (
        <Listing<Character>
            getItems={getCharacters}
            objectType={ObjectType.CHARACTER}
            listTitle={pathTitles.CHARACTERS}
        />
    )
}

export default CharacterList;