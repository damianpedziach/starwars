import axios from "axios";
import {Character} from "../interfaces/Character";
import {ListResponse} from "./listResponse";
import {apiPaths} from "../routes";
import {ObjectType} from "../interfaces/ObjectType";

export const getCharacters = (page: number) : Promise<ListResponse & { results: Character[] }> =>
    axios.get(`${apiPaths[ObjectType.CHARACTER]}?page=${page}`).then((res) => res.data)

export const getCharacter = (id: number) : Promise<Character> =>
    axios.get(`${apiPaths[ObjectType.CHARACTER]}${id}`).then((res) => res.data)