export default function HotList() {
    const games = [
        {
            image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w0w.png",
        },
        {
            image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7989.png",
        },
    ];

    return (
        <div className="grid grid-cols-6 gap-4">
            {
                games.map((game) => {
                    return (
                        <div
                            className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            < img src={game.image} alt="game" className="" />
                            <a href="#!">
                                <div className="absolute flex items-center bottom-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                    <div className="font-bold center py-2.5 px-3 text-black-700 ml-[45%] rounded-full bg-green-500 flex items-center justify-center font-mono">85</div>
                                </div>

                            </a>
                        </div>
                    )
                })
            }
        </div>
    );
}