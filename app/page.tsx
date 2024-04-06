import Image from "next/image";
import Navbar from "./components/navbar";
import GamesList from "./components/games_list";

export default function Home() {
    return (
        <div>
            <div className="w-2/3 mx-auto">
                <GamesList />
            </div>
        </div>
    );
}
