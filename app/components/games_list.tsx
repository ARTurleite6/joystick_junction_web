
import { useEffect, useState } from 'react';
import GameThumbnail from './game_thumbnail';
type GameListProps = { games: Game[] }
export default function GamesList(props: GameListProps) {

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
        <div className="grid grid-cols-4 gap-4 overflow-scroll">
            {
                props.games.map((game: Game) => {
                    return (<>
                        <GameThumbnail game={game} images={[]} />
                    </>
                    )
                })
            }
        </div>
    );
}
