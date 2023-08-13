import { NavEnvironmentSvg } from "../../../resources/svgs/NavigationSvgs";
import { SearchBar } from "../../common/SearchBar";
import { NewToggleButton } from "./NewToggleButton";

export const ActionBar = () => {
    return (
        <div className="bg-white w-full drop-shadow-sm p-4 grid grid-cols-4">
            <div className="col-span-2 flex items-center ml-1">
                <NewToggleButton />
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
                <SearchBar />
            </div>
        </div>
    );
};
