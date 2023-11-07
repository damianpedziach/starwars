import {ObjectType} from "./ObjectType";

export type DetailMapping = {fieldName: string, label: string, type?: ObjectType.VEHICLE | ObjectType.PLANET | ObjectType.CHARACTER | "boolean" }
export type DetailsMapping = DetailMapping[]