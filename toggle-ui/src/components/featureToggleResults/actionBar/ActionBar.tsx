import { NavEnvironmentSvg } from "../../../resources/svgs/NavigationSvgs";
import { SearchBar } from "../../common/SearchBar";
import { NewToggleButton } from "./CreateToggleButton";
import { useState } from "react";
import { CreateToggleModal } from "./CreateToggleModal";
import Config from "./../../../config/application.json";

export const ActionBar = () => {
    const [createdFlagId, setCreatedFlagId] = useState("");

    const handleCreateToggle = () => {
        fetch(Config["new-toggle-url"], {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ type: "BOOLEAN", value: false }),
        }).then(async (data) => {
            const dataString = await data.text();
            console.log(dataString);
            setCreatedFlagId(dataString);
        });
    };
    return (
        <div className="bg-white w-full drop-shadow-sm p-4 grid grid-cols-4">
            <CreateToggleModal
                flagId={createdFlagId}
                setCreatedFlagId={setCreatedFlagId}
            />
            <div className="col-span-2 flex items-center ml-1">
                {/* <CreateToggleModal flagId={createdFlagId} /> */}
                <NewToggleButton handler={handleCreateToggle} />
                <div className="h-5/6 w-[1px] bg-gray-400 mx-4" />
                <div className="flex items-center">
                    <span className="mr-2">
                        <NavEnvironmentSvg />
                    </span>
                    <h2 className="font-light">
                        <span className="font-semibold">Environment: </span>
                        Production
                    </h2>
                </div>
            </div>
            {/* <div className="col-span-1 border border-l-2-"></div> */}
            <div className="col-span-1 col-start-4">
                <SearchBar handleSearchSubmit={() => {}} />
            </div>
        </div>
    );
};
