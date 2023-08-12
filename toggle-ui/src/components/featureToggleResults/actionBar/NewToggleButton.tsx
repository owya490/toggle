import { NavPlusSvg } from "../../../resources/svgs/NavigationSvgs";

export const NewToggleButton = () => {
    return (
        <button className="text-white text-sm bg-primary hover:bg-[#352ca6] font-medium rounded-lg px-2.5 py-2 inline-flex">
            <span className="mr-1.5">
                <NavPlusSvg isWhite />
            </span>
            New Toggle
        </button>
    );
};
