"use client";

import React, { useEffect, useState } from 'react';
import GamesList from './games_list';

export default function Hot() {

    const [games, setGames] = useState<Game[]>([]);

    const URL = process.env.NEXT_PUBLIC_URL;
    useEffect(() => {
        fetch(`${URL}/games/trending`)
            .then(response => response.json())
            .then(data => setGames(data.games ?? []))
            .catch(error => console.error(error));
        console.log(URL)
    }, []);
    if (!games) return (<div>Loading...</div>)
    return (< GamesList games={games} />
    );
}