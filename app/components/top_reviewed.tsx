"use client";

import React, { useEffect, useState } from 'react';
import GamesList from './games_list';

export default function TopReviewed() {

    const [games, setGames] = useState<Game[]>([]);

    const URL = process.env.NEXT_PUBLIC_URL;
    useEffect(() => {
        fetch(`${URL}/games/top`)
            .then(response => response.json())
            .then(data => setGames(data.games ?? []))
            .catch(error => console.error(error));
        console.log(URL)
    }, []);


    return (< GamesList games={games} />
    );
}