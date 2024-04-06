export default function GamesList() {
    const games = [
        {
            image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.png",
        },
        {
            image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.png",
        },
    ];

    return (
        <div className="grid grid-cols-6 gap-4">
            {
                games.map((game) => {
                    return <img src={game.image} alt="game" />
                })
            }
        </div>
    );
}
