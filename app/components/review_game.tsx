import { useState, useEffect } from "react";
import GameThumbnail from "./game_thumbnail";
import { Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function ReviewGame(review: Review) {
    const [like, setLike] = useState<boolean>(false);


    return <>
        <div className="flex items-start gap-4 ">
            <a href={`/games/${review.game.id}`}>
                <div
                    className="relative w-64 overflow-hidden bg-cover bg-no-repeat"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    key={review.game.id}
                >
                    <img src={`https:${review.game.cover?.url}`} alt={review.game.name} className="h-full" />
                </div>
            </a>
            <div className=" w-full h-40">
                <div className=" top-0 left-0 border border-white/50 p-2 flex flex-col justify-between h-full h-min-24">
                    <p >
                        {review.description}
                    </p>
                </div>

                <div className='flex justify-between w-full p-1'>

                    <span>
                        <Rating
                            value={review.rating}
                            readOnly
                        />
                    </span>
                    <button onClick={() => { setLike(!like); if (!like) { review.like_count++ } else review.like_count-- }}>
                        {review.like_count}{(like) ? <Favorite /> : <FavoriteBorder />}

                    </button>

                </div>
            </div>
        </div>
    </>
}