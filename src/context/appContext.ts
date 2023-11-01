import { createContext } from "react";

//Types
import { Movie } from "../types/movieType";
import { Request } from "../types/requestType";

interface IAppContext {
    ratedMoviesList: Movie[];
}

const appContext = createContext(null);

export default appContext;
