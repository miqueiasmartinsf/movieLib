import styles from "./ShowCase.module.css";

import { ReactElement } from "react";
import { ReactNode } from "react";

//Hooks
import { useEffect, useState } from "react";

//Types
import { Movie } from "../../../../types/movieType";
import { Request } from "../../../../types/requestType";

//Components
import MovieCard from "../../../../components/MovieCard/MovieCard";

const ShowCase = (): ReactElement => {
    const [movies, setMovies] = useState<Movie[]>();

    const fetchRatedMovies = async () => {
        const myHeader = {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTI4NzQ0YzQ5NTYyNzVmOWI0ODhkOTliNmNiZjQzZSIsInN1YiI6IjY1MDMzZGFkZGI0ZWQ2MTA0MzBhNGRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uf0aTaIv1qk_OcDFze3B5Pxt5580ny9LWI43CHAXaOg",
            accept: "application/json",
        };
        const res = await fetch(
            `
        https://api.themoviedb.org/3/movie/top_rated`,
            { method: "GET", headers: myHeader }
        );
        const data: Request = await res.json();
        setMovies(data.results);
        console.log(movies);
    };

    useEffect(() => {
        fetchRatedMovies();
    }, []);

    return (
        <div className={styles.showcase}>
            <h1 className={styles.page_title}>Melhores Filmes</h1>
            <div className={styles.movies_container}>
                {movies?.map((movie): JSX.Element => {
                    return (
                        <MovieCard
                            title={movie.title}
                            vote_average={movie.vote_average}
                            overview={movie.overview}
                            poster_path={movie.poster_path}
                            id={movie.id}
                            key={movie.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ShowCase;
