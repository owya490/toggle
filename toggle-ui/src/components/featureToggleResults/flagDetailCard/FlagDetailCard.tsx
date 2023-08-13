import { BooleanFlagType } from "../../models/FlagValues";
import { FlagDetailEvaluations } from "./FlagDetailEvaluations";
import { FlagDetailText } from "./FlagDetailText";
import { FlagDetailValues } from "./FlagDetailValues";
import { FlagToggle } from "./FlagToggle";

export const FlagDetailCard = ({ toggle }: { toggle: BooleanFlagType }) => {
    return (
        <div className="w-full py-7 bg-white grid grid-cols-4 items-center rounded-md">
            {/* <div className="grid grid-cols-4 items-center"> */}
            <div className="col-span-2 flex items-center">
                <div className="mx-5">
                    <FlagToggle />
                </div>
                <div className="mx-5">
                    <FlagDetailText
                        name="SITE MAINTENANCE MODE"
                        id={toggle.id}
                        description="Description Loren Ipsum Example Text"
                        createdAt={new Date("8/8/2023")}
                    />
                </div>
            </div>
            <div className="col-span-1">
                <FlagDetailValues flagValue={toggle} />
            </div>
            <div className="col-span-1">
                <FlagDetailEvaluations
                    lastRequestedMillis={3210000}
                    totalRequestLastWeek={758}
                />
            </div>
            {/* </div> */}
        </div>
    );
};
