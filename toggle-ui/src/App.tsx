import React, { useState } from "react";
import "./App.css";
import { CreateToggleModal } from "./components/featureToggleResults/actionBar/CreateToggleModal";
import { SideNavbar } from "./components/navigation/SideNavbar";
import FlagDisplay from "./pages/FlagDisplay";
import FlagSearch from "./pages/FlagSearch";
import {
    AbstractFlagType,
    BooleanFlagType,
} from "./components/models/FlagValues";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// export const FlagContext = React.createContext({
//     searchedFlagContext: null,
//     setSearchedFlagContext: "" as any,
// });
function App() {
    const [searchedFlag, setSearchedFlag] = useState(
        new BooleanFlagType("123", false)
    );
    return (
        <div className="bg-white h-screen w-screen">
            <div className="flex">
                <SideNavbar />
                <div className="w-full">
                    {/* <FlagContext.Provider
                        value={{
                            searchedFlagContext: searchedFlag,
                            setSearchedFlagContext: setSearchedFlag,
                        }}
                    > */}
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/display"
                                element={
                                    <FlagDisplay
                                        listOfToggles={
                                            searchedFlag.id === ""
                                                ? []
                                                : [searchedFlag]
                                        }
                                    />
                                }
                            ></Route>
                            <Route
                                path="/search"
                                element={
                                    <FlagSearch
                                        setSearchedFlag={setSearchedFlag}
                                    />
                                }
                            ></Route>
                        </Routes>
                    </BrowserRouter>

                    {/* </FlagContext.Provider> */}
                </div>
            </div>
        </div>
    );
}

export default App;
