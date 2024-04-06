import Navbar from "@/app/components/navbar";

export default function Game() {
    const game = {
        name: "Cyberpunk 2077",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.png",
        summary: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
        rating: 90
    };

    const reviews = [
        {
            rating: 10,
            desc: "twas a good game, I swear"
        }

    ]

    return (
        <>
            <div className="h-full flex flex-col gap-20 ">

                <div className="flex gap-10">
                    <img src={game.image} alt="game" />
                    <div className="w-1/2 flex flex-col gap-10">
                        <h1 className="font-bold text-4xl">{game.name}</h1>
                        <p>{game.summary}</p>
                    </div>
                </div>
                <div className="w-full border-b border-white/50 "></div>
                <div className="">
                    <h2 className="font-bold text-4xl"> Reviews</h2>

                </div>
                {reviews.map((review) => {
                    return <>
                    {review.rating} : {review.desc}
                    </>

                })}
            </div>

        </>
    );
}
