import React from "react";
import {DetailMapping, DetailsMapping} from "../../interfaces/DetailsMapping";
import {DetailsRowContainer, DetailsRowLabel, DetailsRowValue, ObjectList} from "./Details.styled";
import {ObjectType} from "../../interfaces/ObjectType";
import ObjectName from "../ObjectName";
import {getVehicle} from "../../services/getVehicles";
import {getCharacter} from "../../services/getCharacters";
import {getPlanet} from "../../services/getPlanets";

interface DetailsRowProps {
    objectKey: string,
    value: string | string[],
    detailsMapping: DetailsMapping
}

const DetailsRow = ({objectKey, value, detailsMapping}: DetailsRowProps) => {
    const detailMapping = detailsMapping.find((mapping) => mapping.fieldName === objectKey)
    if (!detailMapping)
        return (<></>)

    const getDetailValue = (value: string | string[], detailMapping: DetailMapping) => {
        if (!detailMapping.type || !value) return (<>{value}</>)
        switch (detailMapping.type) {
            case "boolean":
                return (<>{!!value ? 'Yes' : 'No'}</>);
            case ObjectType.VEHICLE:
                    return (
                        <ObjectList>
                            {(value as string[]).map((url) => (
                                <ObjectName
                                    objectType={ObjectType.VEHICLE}
                                    getDetails={getVehicle}
                                    url={url}
                                />
                            ))}
                        </ObjectList>
                    );
            case ObjectType.CHARACTER:
                return (
                    <ObjectList>
                        {(value as string[]).map((url) => (
                            <ObjectName
                                objectType={ObjectType.CHARACTER}
                                getDetails={getCharacter}
                                url={url}
                            />
                        ))}
                    </ObjectList>
                );
            case ObjectType.PLANET:
                return (
                    <ObjectList>
                        {(value as string[]).map((url) => (
                            <ObjectName
                                objectType={ObjectType.PLANET}
                                getDetails={getPlanet}
                                url={url}
                            />
                        ))}
                    </ObjectList>
                );
            default:

                return <></>;
        }
    }

    return (
        <DetailsRowContainer>
            <DetailsRowLabel>{detailMapping.label}:</DetailsRowLabel>
            <DetailsRowValue>{getDetailValue(value, detailMapping) || ""}</DetailsRowValue>
        </DetailsRowContainer>)
}

export default DetailsRow;