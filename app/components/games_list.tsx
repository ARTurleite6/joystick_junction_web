
import GameThumbnail from './game_thumbnail';
type GameListProps = {games:Game[]}
export default function GamesList(props:GameListProps) {
    return (
        <div className="grid grid-cols-4 gap-4 overflow-scroll">
            {
                props.games.map((game:Game) => {
                    return (<>
                        <GameThumbnail game={game} images={[]} />
                    </>
                    )
                })
            }
        </div>
    );
}
