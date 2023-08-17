"use client";

import NavPlus from "./../../../asset/svgs/NavPlus.svg";
import Image from "next/image";

export const NewToggleButton = () => {
    return (
        <button
            className="text-white text-sm bg-primary hover:bg-[#352ca6] font-medium rounded-lg px-2.5 py-2 inline-flex"
            onClick={() => {}}
        >
            <span className="mr-1.5">
                {/* <NavPlusSvg isWhite /> */}
                <Image src={NavPlus} alt="" className="w-5 h-5" />
            </span>
            New Toggle
        </button>
    );
};
