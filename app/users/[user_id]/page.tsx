"use client"
import GameThumbnail from "@/app/components/game_thumbnail"
import UserAvatar from "@/app/components/user_avatar"
import { Favorite } from "@mui/icons-material"
import Rating from "@mui/material/Rating"
import { useParams } from "next/navigation"

import { game1 } from "@/app/examples/games";
import ReviewGame from "@/app/components/review_game"
export default function User() {
    const params = useParams<{ user_id: string }>()
    const u_id = params.user_id

    const john: User = {
        username: "Johny41",
        id: 1
    }
    const reviews: Review[] = [{
        game: game1,
        rating: 5,
        like_count: 103,
        description: "string",
        user: john
    },
    {
        game: game1,
        rating: 5,
        like_count: 103,
        description: "string",
        user: john
    },

    ]
    return <>
        <div className="w-full grid grid-cols-3">
            <div className="">

            <UserAvatar user={john} size={100} />
            </div>
            
            <div className="flex flex-col gap-4 col-span-2">
                <h2 className="text-4xl font-bold" >

                {john.username}'s reviews
                </h2>
                {reviews.map(review =>
                    <ReviewGame {...review} />
                )}
            </div>
        </div>
    </>
}