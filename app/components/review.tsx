"use client"
import Rating from '@mui/material/Rating';
import UserAvatar from "./user_avatar";
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useState } from 'react';

export default function Review(review: Review) {
    const [like, setLike] = useState<boolean>(false);

    return <>
    <div className="flex items-start gap-4">

        <UserAvatar user={{ id: review.user.id, username: "name" }} size={100} />
        <div className=" w-full h-full">
            <div className=" top-0 left-0 border border-white/50 p-2 flex flex-col justify-between  h-min-24">
                <p >
                    {review.description}
                </p>
            </div>

                <div className='flex justify-between w-full  p-1'>

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