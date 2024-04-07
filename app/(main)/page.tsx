"use client"
import Image from "next/image";
import Navbar from "./components/navbar";
import GamesList from "./components/games_list";
import GameThumbnail from "./components/game_thumbnail";
import TopReviewed from "./components/top_reviewed";
import { useState, useEffect } from "react";

export default function Home() {
    const [games, setGames] = useState<Game[]>([]);

    const URL = process.env.NEXT_PUBLIC_URL;
    useEffect(() => {
        fetch(`${URL}/games/`)
            .then(response => response.json())
            .then(data => setGames(data.games ?? []))
            .catch(error => console.error(error));
        console.log(URL)
    }, []);

    return (
        <div>

            <div className="w-2/3">
                <p className="font-bold mb-3 text-4xl">Random Picks</p>
                
                <GamesList games={games} />
            </div>

            <div className="w-2/3 mt-10">
                <p className="font-bold mb-3">TOP REVIEWED GAMES</p>
                <TopReviewed />
            </div>

            <div className="w-2/3 mt-10">
                <p className="font-bold mb-3">HOT 🔥</p>
            </div>
        </div>
    );
}
