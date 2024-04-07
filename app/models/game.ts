interface Game {
    id: number;
    cover: {
        url:string};
    name: string;
    rating: number;
    summary: string;
    tags?: string[];
    play_time?:number
}