import { BooleanSvg } from "../../../resources/svgs/FlagDetailCardSvgs";
import { FlagDetailValuesIProps } from "./models/FlagDetailValuesIProps";

export const FlagDetailValues = ({ flagValue }: FlagDetailValuesIProps) => {
    return (
        <>
            <div className="flex mb-1">
                <span className="mr-2">
                    <BooleanSvg />
                </span>
                <h2 className="font-bold">{flagValue.value}</h2>
            </div>
            <h4 className="font-extralight text-sm">
                Serving{" "}
                <span className="font-semibold">{`${flagValue.defaultServing} `}</span>
                when toggle is OFF
            </h4>
        </>
    );
};
