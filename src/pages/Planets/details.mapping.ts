import {DetailsMapping} from "../../interfaces/DetailsMapping";
import {ObjectType} from "../../interfaces/ObjectType";

export const detailsMapping: DetailsMapping = [
    {
        fieldName: 'climate',
        label: 'Climate'
    },
    {
        fieldName: 'diameter',
        label: 'Diameter',
    },
    {
        fieldName: 'gravity',
        label: 'Gravity'
    },
    {
        fieldName: 'orbital_period',
        label: 'Orbital period'
    },
    {
        fieldName: 'rotation_period',
        label: 'Rotation period'
    },
    {
        fieldName: 'population',
        label: 'Population',
    },
    {
        fieldName: 'surface_water',
        label: 'Surface water',
        type: 'boolean'
    },
    {
        fieldName: 'terrain',
        label: 'Terrain'
    },
    {
        fieldName: 'residents',
        label: 'Residents',
        type: ObjectType.CHARACTER
    }
];