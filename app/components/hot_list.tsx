// interface Game {
//     id: number;
//     cover: {
//         url: string;
//     };
//     name: string;
//     rating: number;
//     summary: string;
// }

export default function HotList() {
    const games = [
        {
            id: 1,
            cover: {
                url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w0w.png",
            },
            name: "Rocket League",
        },
        {
            id: 2,
            cover: {
                url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7989.png",
            },
            name: "CS2"
        },
    ];

    return (
        <div className="grid grid-cols-6 gap-4">
            {
                games.map((game) => {
                    return (
                        <a href="games/1">
                            <div
                                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                < img src={game.cover.url} alt="game" className="" />
                                <div className="absolute flex items-center bottom-0 right-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                    <div className=" absolute bottom-2 right-2  font-bold h-10 w-10 text-black ml-[45%] rounded-full bg-green-200 flex items-center justify-center font-mono">85</div>
                                </div>

                            </div>
                        </a>
                    )
                })
            }
        </div>
    );
}