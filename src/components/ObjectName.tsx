import React from "react";
import {ObjectType} from "../interfaces/ObjectType";
import {getIdFromObjectUrl} from "../utils/helpers";
import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import {getDetailsPath} from "../routes";

interface ObjectNameProps {
    objectType: ObjectType
    getDetails: (id: number) => Promise<object & { name: string, url: string }>,
    url: string
}

const ObjectName = ({objectType, getDetails, url}: ObjectNameProps) => {
    const id = +getIdFromObjectUrl(url);
    const query = useQuery({queryKey: [objectType, 'details', id], queryFn: () => getDetails(id)})
    const {data} = query;

    return (
        <>
            {!!data && (
                <span>
                        <Link to={getDetailsPath(+getIdFromObjectUrl(data.url), objectType)}>{data.name}</Link>
                    </span>
            )}
        </>
    );
}

export default ObjectName;