"use client";

import Image from "next/image";
import NavPlus from "./../../../asset/svgs/NavPlus.svg";

export const NewToggleButton = ({ openModal }: { openModal: () => void }) => {
    return (
        <button
            className="text-white text-sm bg-primary hover:bg-[#352ca6] font-medium rounded-lg px-2.5 py-2 inline-flex whitespace-nowrap"
            onClick={openModal}
        >
            <span className="mr-1.5">
                {/* <NavPlusSvg isWhite /> */}
                <Image src={NavPlus} alt="" className="w-5 h-5" />
            </span>
            New Toggle
        </button>
    );
};
