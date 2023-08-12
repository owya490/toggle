import { useState } from "react";
import FlagDetailTextIProps from "./models/FlagDetailTextIProps";
import { dateDiff } from "../../../services/utilities";

export const FlagDetailText = ({
    id,
    name,
    description,
    createdAt,
}: FlagDetailTextIProps) => {
    const now = new Date();
    const daysSinceCreation = Math.round(dateDiff(createdAt, now, "d"));
    return (
        <div className="block">
            <h1 className="font-extrabold text-lg">{name}</h1>
            <h3 className="font-light text-sm">{description}</h3>
            <h4 className="font-extralight text-xs">{`Created ${daysSinceCreation} days ago`}</h4>
        </div>
    );
};
