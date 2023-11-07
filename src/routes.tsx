import {ObjectType} from "./interfaces/ObjectType";

export const mainApiPath = "https://swapi.dev/api/"
export const apiPaths = {
    [ObjectType.CHARACTER]: `${mainApiPath}people/`,
    [ObjectType.VEHICLE]:  `${mainApiPath}vehicles/`,
    [ObjectType.PLANET]:  `${mainApiPath}planets/`,
};

export const paths = {
    HOME: "/",
    CHARACTERS: "characters/",
    PLANETS: "planets/",
    VEHICLES: "vehicles/"
}

export const pathTitles = {
    HOME: "Characters",
    CHARACTERS: "Characters",
    PLANETS: "Planets",
    VEHICLES: "Vehicles"
}
export const navigationRoutes = [
    {
        displayName: pathTitles.CHARACTERS,
        path: paths.CHARACTERS,
    },
    {
        displayName: pathTitles.PLANETS,
        path: paths.PLANETS,
    },
    {
        displayName: pathTitles.VEHICLES,
        path: paths.VEHICLES,
    }
];

export function getDetailsPath (id: number, objectType: ObjectType) {
    switch (objectType){
        case ObjectType.PLANET:
            return `/${paths.PLANETS}${id}`;
        case ObjectType.CHARACTER:
            return `/${paths.CHARACTERS}${id}`;
        case ObjectType.VEHICLE:
            return `/${paths.VEHICLES}${id}`;
    }
}