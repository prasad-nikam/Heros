import { Link } from "react-router-dom";

const heroes = [
    { name: "Agnce", path: "/agnce" },
    { name: "Paymark", path: "/paymark" },
    { name: "TeamSync", path: "/teamsync" },
    { name: "EzCard", path: "ezcard" },
];

function Home() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white p-10">
            <h1 className="text-4xl font-bold mb-10">Hero Showcase</h1>

            <div className="grid md:grid-cols-3 gap-6">
                {heroes.map((hero) => (
                    <Link
                        key={hero.path}
                        to={hero.path}
                        className="p-6 bg-neutral-900 rounded-xl hover:bg-neutral-800 transition"
                    >
                        <h2 className="text-xl font-semibold">{hero.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home