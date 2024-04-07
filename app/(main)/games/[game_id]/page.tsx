"use client"

import Navbar from "@/app/components/navbar";
import ReviewUser from "@/app/components/review_user";
import { game1 } from "@/app/examples/games";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Rating } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Game() {

    const params = useParams<{ game_id: string }>()
    const game_id = params.game_id


    const [game, setGame] = useState<Game>();
    type Review_ = { rating: number, description: string, }
    const [review, setReview] = useState<Review_ | undefined>(undefined);

    const URL = process.env.NEXT_PUBLIC_URL;
    useEffect(() => {
        fetch(`${URL}/games/${game_id}`)
            .then(response => response.json())
            .then(data => setGame(data.game))
            .catch(error => console.error(error));
        console.log(URL)
    }, []);

    const john: User = {
        username: "Johny41",
        id: 1
    }

    const reviews: Review[] = [
        {
            rating: 5,
            description: "twas a good game, I swear wdidnddoiaosdnasoidoasdaisdsbuadibgafiukh jhgdsbas iud Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam harum labore quisquam tempore maxime nobis. Quod ducimus iusto cumque sint saepe! Earum nihil libero itaque ut atque fugiat odit! ",
            user: john,
            game: game1,
            like_count: 1,
        }

    ]
    if (game == undefined) return <div>Loading...</div>
    return (
        <>
            <div className="h-full flex flex-col gap-20 items-center ">
                <div className="flex gap-10">
                    <img src={game.image_url} alt="game" />
                    <div className="w-1/2">
                        <h1 className="font-bold text-4xl mb-6">{game.name}</h1>
                        <p>{game.summary}</p>
                        <div className="mt-4 flex justify-between">
                            <div className="flex gap-2">
                                {game.tags?.map(tag => <span className="underline bg-space_cadet_light px-2 p-1 rounded-xl">#{tag}</span>)}
                            </div>
                            <div className="">
                                {game.play_time && <>
                                    <AccessTimeIcon /> {game.play_time} hrs
                                </>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="w-1/4">
                        <h2 className="font-bold text-4xl mb-2"> Your review</h2>

                        <div className=" w-full h-full">
                            {!review ?
                                <> <div className=" top-0 left-0 border border-white/50 p-2 flex flex-col   h-full">
                                    <textarea className=" h-full bg-white/20  text-left align-text-top p-2" />

                                </div>

                                    <div className='flex justify-between w-full p-1'>
                                        <Rating />

                                        <button onClick={() => { setReview({ description: "cemae tal", rating: 4 }) }}>
                                            Submit
                                        </button>
                                    </div>
                                </>
                                :
                                <> <div className=" top-0 left-0 border border-white/50 p-2 flex flex-col   h-full">
                                    <p className=" h-full bg-white/20  text-left align-text-top p-2" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente repellat culpa vero, soluta ea ad unde minus! Voluptatem, debitis dolores maxime iste dicta voluptatum magnam temporibus blanditiis consequatur voluptate! </p>

                                </div>

                                    <div className='flex justify-between w-full p-1'>
                                        <Rating value={review.rating} readOnly />

                                        <button onClick={() => { setReview(undefined) }}>
                                            Edit
                                        </button>
                                    </div>
                                </>}
                        </div>
                    </div>
                </div>
                <div className="w-full border-b border-white/50 "></div>
                <div className="grid grid-cols-2 gap-6">

                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-4xl"> Friend reviews</h2>

                        {reviews.map((review) => {
                            return <>
                                <ReviewUser {...review} />
                            </>

                        })}
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-4xl"> Top reviews</h2>

                        {reviews.map((review) => {
                            return <>
                                <ReviewUser {...review} />
                            </>

                        })}
                    </div>
                </div>
            </div>

        </>
    );
}
