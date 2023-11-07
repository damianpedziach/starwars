import React from "react";
import {useParams} from "react-router-dom";
import Details from "../../components/Details/Details";
import {getVehicle} from "../../services/getVehicles";
import {ObjectType} from "../../interfaces/ObjectType";
import {detailsMapping} from "./details.mapping";

const VehicleDetails = () => {
    const { id } = useParams();


    return (
        <>
            {!!id && (
                <Details
                    getDetails={getVehicle}
                    objectType={ObjectType.VEHICLE}
                    id={+id}
                    detailsMapping={detailsMapping}
                    />
            )}
        </>
    )
}

export default VehicleDetails;