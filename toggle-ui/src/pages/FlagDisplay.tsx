import { ActionBar } from "../components/featureToggleResults/actionBar/ActionBar";
import { FlagDetailCard } from "../components/featureToggleResults/flagDetailCard/FlagDetailCard";
import { SideNavbar } from "../components/navigation/SideNavbar";
import { NavPlusSvg } from "../resources/svgs/NavigationSvgs";

const FlagDisplay = () => {
    return (
        <>
            <div className="flex">
                <SideNavbar />
                <div className="w-full">
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
                                <h2 className="text-lg font-light">
                                    Evalutaions
                                </h2>
                            </div>
                        </div>
                        <FlagDetailCard />
                        <FlagDetailCard />
                        <FlagDetailCard />
                        <FlagDetailCard />
                        <FlagDetailCard />
                        <FlagDetailCard />
                        <FlagDetailCard />
                        <FlagDetailCard />
                        <FlagDetailCard />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default FlagDisplay;
