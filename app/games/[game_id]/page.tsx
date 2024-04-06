import Navbar from "@/app/components/navbar";

export default function Game() {
    const game = {
        name: "Cyberpunk 2077",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.png",
        summary: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you."
    };

    return (
        <>
            <div className="flex gap-10">
                <img src={game.image} alt="game" />
                <div className="w-1/2 flex flex-col gap-10">
                    <h1 className="font-bold text-4xl">{game.name}</h1>
                    <p>{game.summary}</p>
                </div>
            </div>
        </>
    );
}
