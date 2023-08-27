"use client";

import Image from "next/image";
// import Logo from "./../../../resources/images/Toggle_Logo.png";
import { useState } from "react";
import CreateToggleDialog from "../CreateToggleDialog";
import Logo from "./../../../asset/Toggle_Logo.png";
import DownArrowhead from "./../../../asset/svgs/DownArrowhead.svg";
import { NewToggleButton } from "./CreateToggleButton";
import { SearchBar } from "./SearchBar";
export default function Navbar() {
    const navTitles = ["Your Toggles", "Dashboards", "Teams"];

    let [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <nav className="fixed top-0 w-screen h-16 bg-white flex items-center drop-shadow-md z-50">
            <CreateToggleDialog isOpen={isOpen} closeModal={closeModal} />
            <Image src={Logo} alt="" className="w-16 mr-1 ml-8" />
            <h1 className="text-4xl font-montserrat-bold">Toggle</h1>
            <div className="hidden xl:flex mx-10  items-center">
                {navTitles.map((title, idx) => {
                    return (
                        <button
                            id={`${idx}`}
                            className="mx-4 flex items-center py-0.5 px-2.5 rounded-md hover:bg-secondary"
                        >
                            <h2 className="text-2xl text-[#6A6A6B] whitespace-nowrap font-montserrat">
                                {title}
                            </h2>
                            <Image
                                src={DownArrowhead}
                                alt=""
                                className="w-6 h-6"
                            />
                        </button>
                    );
                })}
            </div>
            <div className="mx-10">
                <NewToggleButton openModal={openModal} />
            </div>
            <div className="w-1/3 xl:w-1/5 ml-auto">
                <SearchBar />
            </div>
        </nav>
    );
}
