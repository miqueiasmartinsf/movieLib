import styles from "./MoviePage.module.css";

//types
import { Movie } from "../../types/movieType";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { ReactElement } from "react";

//Hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Icons
import { BsStar } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";

//Components
import Header from "../../components/Header/Header";

const MoviePage = (): ReactElement => {
    const [movieDetail, setMovieDetail] = useState<MovieDetailsType>({});

    const movieId = useParams();

    const fetchCurrentMovie = async () => {
        const myHeader = {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTI4NzQ0YzQ5NTYyNzVmOWI0ODhkOTliNmNiZjQzZSIsInN1YiI6IjY1MDMzZGFkZGI0ZWQ2MTA0MzBhNGRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uf0aTaIv1qk_OcDFze3B5Pxt5580ny9LWI43CHAXaOg",
            accept: "application/json",
        };

        console.log(movieId);

        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId.id}`,
            { method: "GET", headers: myHeader }
        );

        const data = await res.json();

        setMovieDetail(data);

        console.log(data);
    };

    useEffect(() => {
        fetchCurrentMovie();
    }, []);

    return (
        <div className={styles.movie_page}>
            <Header />
            <div className={styles.movie_details}>
                <div className={styles.img_container}>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                        alt=""
                    />
                    <h1>{movieDetail.title}</h1>
                    <span>
                        {" "}
                        <BsStar /> {movieDetail.vote_average}{" "}
                    </span>
                    <p>{movieDetail.tagline}</p>
                </div>
                <div className={styles.movie_description}>
                    <section className={styles.info}>
                        <h2>
                            <BsWallet2 /> Orçamento:
                        </h2>
                        <p>{movieDetail.budget}</p>
                    </section>
                    <section className={styles.info}>
                        <h2>
                            <AiOutlineLineChart /> Receita:
                        </h2>
                        <p>{movieDetail.revenue}</p>
                    </section>
                    <section className={styles.info}>
                        <h2>
                            <BiTimeFive /> Duração:
                        </h2>
                        <p>{movieDetail.runtime} minutos</p>
                    </section>
                    <section className={styles.info}>
                        <h2>
                            <MdOutlineDescription /> Descrição:
                        </h2>
                        <p>{movieDetail.overview}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
