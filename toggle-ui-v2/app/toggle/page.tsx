import { SearchBar } from "../_components/navigation/SearchBar";

export default function TogglePage() {
    return (
        <main className="mt-16 flex flex-col justify-center h-screen items-center">
            <h1 className="text-5xl font-bold">Toggle Search</h1>
            <div className="w-2/3 xl:w-1/2 my-5">
                <SearchBar />
            </div>
        </main>
    );
}
