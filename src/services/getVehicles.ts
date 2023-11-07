import {ListResponse} from "./listResponse";
import {Vehicle} from "../interfaces/Vehicle";
import axios from "axios";
import {apiPaths} from "../routes";
import {ObjectType} from "../interfaces/ObjectType";

export interface VehicleListResponse extends ListResponse {
    results: Vehicle[]
}

export const getVehicles = (page: number) : Promise<VehicleListResponse> =>
    axios.get(`${apiPaths[ObjectType.VEHICLE]}?page=${page}`).then((res) => res.data);

export const getVehicle = (id: number) : Promise<Vehicle> =>
    axios.get(`${apiPaths[ObjectType.VEHICLE]}${id}`).then((res) => res.data);