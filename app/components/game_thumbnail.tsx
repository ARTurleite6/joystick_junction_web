type GameThumbnailProps ={ game: Game ,images?:[]}

export default function GameThumbnail(props: GameThumbnailProps) {
    return <>
        <div
            className="relative w-64 overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            key={props.game.id}
        >
            <img src={`https:${props.game.cover?.url}`} alt={props.game.name} className="h-full" />
            <a href={`games/${props.game.id}`}>
                <div className="absolute flex items-center bottom-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    <div className="font-bold center py-2.5 px-3 text-black-700 ml-[45%] rounded-full bg-green-500 flex items-center justify-center font-mono">{Math.round(props.game.rating)}</div>
                </div>
            </a>
        </div>
    </>
}