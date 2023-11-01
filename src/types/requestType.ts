import { Movie } from "./movieType";

export interface Request {
    page: number;
    results: Movie[];
    total_pages: number;
    total_result: number;
}
