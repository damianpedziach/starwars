import {DetailsMapping} from "../../interfaces/DetailsMapping";
import {ObjectType} from "../../interfaces/ObjectType";

export const detailsMapping: DetailsMapping = [
    {
        fieldName: 'gender',
        label: 'Gender'
    },
    {
        fieldName: 'height',
        label: 'Height'
    },
    {
        fieldName: 'mass',
        label: 'Mass',
    },
    {
        fieldName: 'eye_color',
        label: 'Eye Color'
    },
    {
        fieldName: 'hair_color',
        label: 'Hair Color'
    },
    {
        fieldName: 'skin_color',
        label: 'Skin Color',
    },
    {
        fieldName: 'birth_year',
        label: 'Birth Year',
    },
    {
        fieldName: 'vehicles',
        label: 'Vehicles',
        type: ObjectType.VEHICLE
    },
];