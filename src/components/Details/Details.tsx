import React from "react";
import {ObjectType as ObjectTypeEnum} from "../../interfaces/ObjectType";
import {useQuery} from "@tanstack/react-query";
import {DetailsMapping} from "../../interfaces/DetailsMapping";
import DetailsRow from "./DetailsRow";
import {PageHeader, RandomImage} from "../../pages/Layout.styled";
import {getRandomColor} from "../../utils/helpers";
import {DetailsContainer, DetailsFooter} from "./Details.styled";
import {useNavigate} from "react-router-dom";

interface DetailsProps<ObjectType> {
    getDetails: (id: number) => Promise<ObjectType & {name: string, url: string}>,
    objectType: ObjectTypeEnum,
    id: number,
    detailsMapping: DetailsMapping
}
function Details<ObjectType>({id, getDetails, objectType, detailsMapping}: DetailsProps<ObjectType>) {
    const query = useQuery({queryKey: [objectType, 'details', id], queryFn: () => getDetails(id)})
    const {data, isLoading} = query;
    const navigate = useNavigate();

    if (!isLoading && data){
        return (
            <DetailsContainer>
                <PageHeader>{data.name}</PageHeader>
                <RandomImage $backgroundColor={getRandomColor()} />
                {Object.keys(data).map((objectKey) => (
                    <DetailsRow
                        key={objectKey}
                        objectKey={objectKey}
                        value={data[objectKey as keyof ObjectType] as string}
                        detailsMapping={detailsMapping}
                    ></DetailsRow>
                ))}
                <DetailsFooter>
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </DetailsFooter>
            </DetailsContainer>
        )
    }

    return (
        <>Loading...</>
    )

}

export default Details;