"use client";

import Select from "@/app/_components/input/Select";
import Toggle from "@/app/_components/input/Toggle";
import { ToggleTypes } from "@/app/_models/IToggle";
import { useEffect, useState } from "react";

export default function ToggleIdPage({ params }: any) {
    const [tab, setTab] = useState(0);
    const tabTitles = ["Rules", "Insights", "History"];

    const [toggle, setToggle] = useState({
        id: "",
        name: "",
        type: null,
        value: false,
        default: false,
    });

    useEffect(() => {
        fetch(
            "http://ec2-54-253-24-84.ap-southeast-2.compute.amazonaws.com:8080/flag/025efb62-b697-4e8b-984b-ab9136657ff7",
            { method: "GET", headers: { "Content-Type": "application/json" } }
        ).then(async (data) => {
            const jsonData = await data.json();
            setToggle({ ...jsonData, type: ToggleTypes.BOOLEAN });
        });
    });

    return (
        <main>
            {/* <h1 className="text-xl">hello {params.id}</h1> */}
            <div className="grid grid-cols-2 md:grid-cols-3 mt-16">
                <div className="hidden md:block col-span-1">lol</div>
                <div className="col-span-2 h-screen">
                    <div className="drop-shadow-md bg-white z-40">
                        <div className="px-5 pt-5">
                            <h1 className="text-4xl mb-2">{toggle.name}</h1>
                            <code className="bg-[#f1f1f1] py-0.5 px-2 rounded-md text-xs">
                                {toggle.id}
                            </code>
                            <h3 className="my-6">
                                I determine if the user can see admin tools.
                            </h3>
                            <div className="flex text-lg font-light space-x-5">
                                {tabTitles.map((title, idx) => {
                                    return (
                                        <button
                                            className={`px-4 ${
                                                tab === idx
                                                    ? "border-b-2 border-black"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                setTab(idx);
                                            }}
                                        >
                                            <h2
                                                className={
                                                    tab === idx
                                                        ? "text-lg font-bold"
                                                        : "text-lg font-light"
                                                }
                                            >
                                                {title}
                                            </h2>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="h-full drop bg-[#fafafa] px-5 py-10 space-y-10">
                        <div>
                            <h2 className="font-bold mb-2">Activate Toggle</h2>
                            <div className="flex space-x-2 text-sm items-center">
                                <span>OFF</span>
                                <Toggle
                                    isChecked={toggle.value}
                                    size="medium"
                                    onChangeActions={(value) => {
                                        fetch(
                                            "http://ec2-54-253-24-84.ap-southeast-2.compute.amazonaws.com:8080/flag/update",
                                            {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type":
                                                        "application/json",
                                                },
                                                body: JSON.stringify({
                                                    id: toggle.id,
                                                    value: value,
                                                }),
                                            }
                                        ).then(async (data) => {
                                            console.log(await data.text());
                                        });
                                    }}
                                />
                                <span>ON</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold mb-2">Default Rule</h2>
                            <div className="bg-white w-full py-7 flex items-center drop-shadow-sm border">
                                <h3 className="mx-5 align-baseline">Serve</h3>
                                <div className="w-2/3 xl:w-1/3">
                                    <Select
                                        options={[
                                            {
                                                id: 1,
                                                name: "False",
                                                image: "https://www.icolorpalette.com/download/solidcolorimage/ff6961_solid_color_background_icolorpalette.png",
                                            },
                                            {
                                                id: 2,
                                                name: "True",
                                                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEUWo0qs8qW8AAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==",
                                            },
                                        ]}
                                        onChangeActions={(option) => {
                                            //send option to dynamodb for update
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
