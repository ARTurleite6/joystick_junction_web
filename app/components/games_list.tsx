"use client";

import React, { useEffect, useState } from 'react';

export default function GamesList() {
    const [games, setGames] = useState<Game[]>([]);

    const URL = process.env.NEXT_PUBLIC_URL;
    useEffect(() => {
        fetch(`${URL}/games/`)
            .then(response => response.json())
            .then(data => setGames(data.games))
            .catch(error => console.error(error));
        console.log(URL)
    }, []);

    return (
        <div className="grid grid-cols-6 gap-4 overflow-scroll">
            {
                games.map((game) => {
                    return (
                        <div
                            className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            key={game.id}
                        >
                            <img src={`https:${game.cover?.url}`} alt={game.name} className="w-full h-full" />
                            <a href="#!">
                                <div className="absolute flex items-center bottom-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                    <div className="font-bold center py-2.5 px-3 text-black-700 ml-[45%] rounded-full bg-green-500 flex items-center justify-center font-mono">{Math.round(game.rating)}</div>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    );
}
