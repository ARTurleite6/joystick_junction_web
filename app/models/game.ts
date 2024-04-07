interface Game {
    id: number;
    image_url: string;
    name: string;
    total_rating: number;
    summary: string;
    tags?: string[];
    play_time?: number
}