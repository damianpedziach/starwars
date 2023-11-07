import {DetailsMapping} from "../../interfaces/DetailsMapping";
import {ObjectType} from "../../interfaces/ObjectType";

export const detailsMapping: DetailsMapping = [
    {
        fieldName: 'cargo_capacity',
        label: 'Cargo capacity',
    },
    {
        fieldName: 'consumables',
        label: 'Consumables',
    },
    {
        fieldName: 'cost_in_credits',
        label: 'Cost in credits'
    },
    {
        fieldName: 'crew',
        label: 'Crew',
    },
    {
        fieldName: 'length',
        label: 'Length'
    },
    {
        fieldName: 'manufacturer',
        label: 'Manufacturer',
    },
    {
        fieldName: 'max_atmosphering_speed',
        label: 'Max Atmosphering Speed',
    },
    {
        fieldName: 'model',
        label: 'Model',
    },
    {
        fieldName: 'passengers',
        label: 'Passengers',
    },
    {
        fieldName: 'vehicle_class',
        label: 'Vehicle class'
    },
    {
        fieldName: 'pilots',
        label: 'Pilots',
        type: ObjectType.CHARACTER
    }
];