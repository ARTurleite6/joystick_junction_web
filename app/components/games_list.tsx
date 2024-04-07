"use client";

import React, { useEffect, useState } from 'react';
import GameThumbnail from './game_thumbnail';

export default function GamesList() {
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
        <div className="grid grid-cols-6 gap-4 overflow-scroll">
            {
                games.map((game: Game) => {
                    return (<>
                        <GameThumbnail game={game} images={[]} />
                        <div
                            className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            key={game.id}
                        >
                            <img src={`https:${game.image_url}`} alt={game.name} className="w-full h-full" />
                            <a href={`games/${game.id}`}>
                                <div className="absolute flex items-center bottom-0 right-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                    <div className=" absolute bottom-2 right-2  font-bold h-10 w-10 text-black ml-[45%] rounded-full bg-green-200 flex items-center justify-center font-mono">85</div>
                                </div>
                            </a>
                        </div>
                    </>
                    )
                })
            }
        </div>
    );
}
