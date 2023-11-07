import React from "react";
import Listing from "../../components/Listing/Listing";
import {getVehicles} from "../../services/getVehicles";
import {ObjectType} from "../../interfaces/ObjectType";
import {Vehicle} from "../../interfaces/Vehicle";
import {pathTitles} from "../../routes";

const VehicleList = () => {
    return (
        <Listing<Vehicle>
            getItems={getVehicles}
            objectType={ObjectType.VEHICLE}
            listTitle={pathTitles.VEHICLES}
        />
    )
}

export default VehicleList;