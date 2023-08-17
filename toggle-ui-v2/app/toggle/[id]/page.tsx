export default function ToggleIdPage({ params }: any) {
    return (
        <main>
            <h1 className="text-xl">hello {params.id}</h1>
        </main>
    );
}
