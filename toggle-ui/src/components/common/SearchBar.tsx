import { BranchSvg, SearchSvg } from "../../resources/svgs/SearchBarSvgs";

export const SearchBar = () => {
    return (
        <form className="flex items-center pr-5">
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BranchSvg />
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Search Toggle name..."
                />
            </div>
            <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-primary hover:bg-[#352ca6] rounded-lg border"
            >
                <SearchSvg />
            </button>
        </form>
    );
};
