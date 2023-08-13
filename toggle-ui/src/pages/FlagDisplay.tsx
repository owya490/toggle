import { useState } from "react";
import { ActionBar } from "../components/featureToggleResults/actionBar/ActionBar";
import { CreateToggleModal } from "../components/featureToggleResults/actionBar/CreateToggleModal";
import { FlagDetailCard } from "../components/featureToggleResults/flagDetailCard/FlagDetailCard";
import { SideNavbar } from "../components/navigation/SideNavbar";
import Config from "./../config/application.json";
import {
    AbstractFlagType,
    BooleanFlagType,
} from "../components/models/FlagValues";

const FlagDisplay = ({
    listOfToggles,
}: {
    listOfToggles: AbstractFlagType[];
}) => {
    // const [createdFlagId, setCreatedFlagId] = useState("");

    // const handleCreateToggle = () => {
    //     fetch(Config["new-toggle-url"], {
    //         method: "POST",
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ type: "BOOLEAN", value: false }),
    //     }).then(async (data) => {
    //         const dataString = await data.text();
    //         console.log(dataString);
    //         setCreatedFlagId(dataString);
    //     });
    // .then(() => {
    //     (
    //         document.getElementById("create-toggle-modal")! as any
    //     ).showModal();
    // });
    // };

    return (
        <div>
            {/* <CreateToggleModal
                flagId={createdFlagId}
                setCreatedFlagId={setCreatedFlagId}
            /> */}
            <ActionBar />
            <div className="flex-col w-full h-max p-5 pr-8 space-y-3 bg-secondary">
                <div className="grid grid-cols-4 pl-3">
                    <div className="col-span-2">
                        <h2 className="text-lg font-light">
                            Your Toggle Details
                        </h2>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-lg font-light">Values</h2>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-lg font-light">Evalutaions</h2>
                    </div>
                </div>
                {listOfToggles.map((toggle) => {
                    return <FlagDetailCard toggle={toggle} />;
                })}
            </div>
        </div>
    );
};

export default FlagDisplay;
