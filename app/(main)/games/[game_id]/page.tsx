import Navbar from "@/app/components/navbar";
import ReviewUser from "@/app/components/review_user";
import { game1 } from "@/app/examples/games";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export default function Game() {

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

    return (
        <>
            <div className="h-full flex flex-col gap-20 ">
                <div className="flex gap-10">
                    <img src={game1.cover.url} alt="game" />
                    <div className="w-1/2">
                        <h1 className="font-bold text-4xl mb-6">{game1.name}</h1>
                        <p>{game1.summary}</p>
                        <div className="mt-4 flex justify-between">
                            <div className="flex gap-2">
                                {game1.tags?.map(tag => <span className="underline bg-space_cadet_light px-2 p-1 rounded-xl">#{tag}</span>)}
                            </div>
                            <div className="">
                                {game1.play_time && <>
                                    <AccessTimeIcon /> {game1.play_time} hrs
                                </>
                                }
                            </div>

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
