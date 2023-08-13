import {
    NavConfigureSvg,
    NavDashboardSvg,
    NavDocumentationSvg,
    NavQuickStartSvg,
    NavToggleSvg,
    NavUserSvg,
} from "../../resources/svgs/NavigationSvgs";

export const SideNavbar = () => {
    const navbarButtonText = [
        ["Feature Toggles", <NavToggleSvg />],
        ["Users", <NavUserSvg />],
        ["Configure", <NavConfigureSvg />],
        ["Dashboards", <NavDashboardSvg />],
        ["Quick Start", <NavQuickStartSvg />],
        ["Documentation", <NavDocumentationSvg />],
    ];
    return (
        <div className="bg-white h-screen w-1/6 pt-2 drop-shadow-sm z-40">
            {/* <div className="ml-3 h-screen"> */}
            <div className="p-5">
                <h1 className="font-extrabold text-2xl">Environment</h1>
                <h2 className="text-3xl pl-2">Production</h2>
            </div>
            <ol className="h-1/2 pt-5 grid grid-rows-6 items-center">
                {navbarButtonText.map((text) => {
                    return (
                        <li className="w-full">
                            <button className="w-full hover:bg-violet-400 hover:text-white p-4 text-left">
                                <div className="flex items-center">
                                    <span>{text[1]}</span>
                                    <h4 className="font-semibold ml-4">
                                        {text[0]}
                                    </h4>
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
