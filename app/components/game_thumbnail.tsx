type GameThumbnailProps = { game: Game, images?: [] }

export default function GameThumbnail(props: GameThumbnailProps) {
    return <>
        <a href={`games/${props.game.id}`}>

            <div
                className="relative  overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                < img src={props.game.image_url?.replace("thumb", "1080p") ?? ""} alt={props.game.name} className=" w-64" />
                <div className="absolute flex items-center bottom-0 right-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    <div className=" absolute bottom-2 right-2  font-bold h-10 w-10 text-black ml-[45%] rounded-full bg-green-200 flex items-center justify-center font-mono">{Math.round(props.game.total_rating)}</div>
                </div>

            </div>
        </a>
    </>
}
