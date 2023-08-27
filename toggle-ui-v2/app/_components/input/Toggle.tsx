import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Toggle({
    isChecked,
    size,
    onChangeActions,
}: {
    isChecked: boolean;
    size: string;
    onChangeActions: (value: boolean) => void;
}) {
    const [enabled, setEnabled] = useState(isChecked);
    switch (size) {
        case "small":
            return (
                <Switch
                    checked={enabled}
                    onChange={() => {
                        const prev = enabled;
                        setEnabled(!prev);
                        onChangeActions(!prev);
                    }}
                    className={`${enabled ? "bg-green-600" : "bg-gray-400"}
                  relative inline-flex h-[21px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span
                        aria-hidden="true"
                        className={`${
                            enabled ? "translate-x-4" : "translate-x-0"
                        }
                    pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            );
        case "medium":
            return (
                <Switch
                    checked={enabled}
                    onChange={() => {
                        const prev = enabled;
                        setEnabled(!prev);
                        onChangeActions(!prev);
                    }}
                    className={`${enabled ? "bg-green-600" : "bg-gray-400"}
                  relative inline-flex h-[29px] w-[53px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span
                        aria-hidden="true"
                        className={`${
                            enabled ? "translate-x-6" : "translate-x-0"
                        }
                    pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            );
        case "large":
            return (
                <Switch
                    checked={enabled}
                    onChange={() => {
                        const prev = enabled;
                        setEnabled(!prev);
                        onChangeActions(!prev);
                    }}
                    className={`${enabled ? "bg-green-600" : "bg-gray-400"}
                      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${
                            enabled ? "translate-x-9" : "translate-x-0"
                        }
                        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            );
    }
}
