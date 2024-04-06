import Image from "next/image";
import Navbar from "./components/navbar";
import GamesList from "./components/games_list";
import TopReviewed from "./components/top_reviewed";
import HotList from "./components/hot_list";

export default function Home() {
    return (
        <div>

            <div className="w-2/3">
                <GamesList />
            </div>

            <div className="w-2/3 mt-10">
                <p className="font-bold mb-3">TOP REVIEWED GAMES</p>
                <TopReviewed />
            </div>

            <div className="w-2/3 mt-10">
                <p className="font-bold mb-3">HOT 🔥</p>
                <HotList />
            </div>
        </div>
    );
}
