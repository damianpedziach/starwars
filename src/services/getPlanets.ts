import {ListResponse} from "./listResponse";
import axios from "axios";
import {Planet} from "../interfaces/Planet";
import {apiPaths} from "../routes";
import {ObjectType} from "../interfaces/ObjectType";

export interface PlanetListResponse extends ListResponse{
    results: Planet[]
}

export const getPlanets = (page: number) : Promise<PlanetListResponse> =>
    axios.get(`${apiPaths[ObjectType.PLANET]}?page=${page}`).then((res) => res.data);

export const getPlanet = (id: number) : Promise<Planet> =>
    axios.get(`${apiPaths[ObjectType.PLANET]}${id}`).then((res) => res.data);