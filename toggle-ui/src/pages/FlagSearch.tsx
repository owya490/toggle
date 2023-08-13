import { SearchBar } from "../components/common/SearchBar";
import Config from "./../config/application.json";
// import { FlagContext } from "../App";
import { useContext } from "react";
import {
    AbstractFlagType,
    BooleanFlagType,
} from "../components/models/FlagValues";
import { useNavigate } from "react-router-dom";

const FlagSearch = ({
    setSearchedFlag,
}: {
    setSearchedFlag: (flag: AbstractFlagType) => void;
}) => {
    // const { searchedFlag, setSearchedFlag } = useContext(FlagContext);
    const navigate = useNavigate();

    const handleFlagSearch = (id: string) => {
        console.log(`${Config["search-toggle-url"]}${id}`);
        fetch(`${Config["search-toggle-url"]}${id}`, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(async (data) => {
            const dataJson = await data.json();
            setSearchedFlag(new BooleanFlagType(dataJson.id, dataJson.value));
            // console.log(dataString);
            // setCreatedFlagId(dataString);
            navigate("/display");
        });
    };
    return (
        <div className="flex justify-center items-center h-full">
            <div>
                <h1 className="text-3xl lg:text-7xl font-extrabold mb-12">
                    Search for a Toggle Below
                </h1>

                <div className="flex justify-center w-full">
                    <div className="w-full max-w-xs lg:max-w-lg">
                        <SearchBar handleSearchSubmit={handleFlagSearch} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlagSearch;
