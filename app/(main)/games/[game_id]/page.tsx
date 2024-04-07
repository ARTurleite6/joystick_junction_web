import Navbar from "@/app/components/navbar";
import Review from "@/app/components/review";
export default function Game() {
    const game: Game = {
        id: 1,
        name: "Cyberpunk 2077",
        cover: {
            url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.png",
        },
        summary: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
        rating: 90
    };

    const john: User = {
        username: "Johny41",
        id: 1
    }

    const reviews: Review[] = [
        { 
            rating: 5,
            description: "twas a good game, I swear wdidnddoiaosdnasoidoasdaisdsbuadibgafiukh jhgdsbas iud Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam harum labore quisquam tempore maxime nobis. Quod ducimus iusto cumque sint saepe! Earum nihil libero itaque ut atque fugiat odit! ",
            user: john,
            game: game,
            like_count: 1,
        }

    ]

    return (
        <>
            <div className="h-full flex flex-col gap-20 ">

                <div className="flex gap-10">
                    <img src={game.cover.url} alt="game" />
                    <div className="w-1/2 flex flex-col gap-10">
                        <h1 className="font-bold text-4xl">{game.name}</h1>
                        <p>{game.summary}</p>
                    </div>
                </div>
                <div className="w-full border-b border-white/50 "></div>
                <div className="grid grid-cols-2 gap-6">

                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-4xl"> Friend reviews</h2>

                        {reviews.map((review) => {
                            return <>
                                <Review {...review} />
                            </>

                        })}
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-4xl"> Top reviews</h2>

                        {reviews.map((review) => {
                            return <>
                                <Review {...review} />
                            </>

                        })}
                    </div>
                </div>
            </div>

        </>
    );
}
