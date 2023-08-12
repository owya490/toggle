import { millisToUnit } from "../../../services/utilities";
import { FlagDetailEvaluationsIProps } from "./models/FlagDetailEvaluationsIProps";

export const FlagDetailEvaluations = ({
    lastRequestedMillis,
    totalRequestLastWeek,
}: FlagDetailEvaluationsIProps) => {
    var lastRequestedText = "Requested: ";
    if (lastRequestedMillis < 60000) {
        lastRequestedText += "a few seconds ago";
    } else if (lastRequestedMillis < 3600000) {
        lastRequestedText += `${Math.round(
            millisToUnit(lastRequestedMillis, "m")
        )} min ago`;
    } else if (lastRequestedMillis < 86400000) {
        lastRequestedText += `${Math.round(
            millisToUnit(lastRequestedMillis, "h")
        )} hours ago`;
    } else if (lastRequestedMillis < 2628000000) {
        lastRequestedText += `${Math.round(
            millisToUnit(lastRequestedMillis, "d")
        )} days ago`;
    } else {
        lastRequestedText += `${Math.round(
            millisToUnit(lastRequestedMillis, "M")
        )} months ago`;
    }
    return (
        <>
            <h2 className="font-light">{lastRequestedText}</h2>
            <h4 className="font-extralight text-xm">{`Requested ${totalRequestLastWeek} times in past 7 days`}</h4>
        </>
    );
};
