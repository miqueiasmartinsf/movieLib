import styles from './SearchResult.module.css'

import {ReactElement} from 'react'

import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

//Components
import Header from '../../components/Header/Header';
import MovieCard from '../../components/MovieCard/MovieCard';

//Types
import { Movie } from '../../types/movieType';

const SearchResult = ():ReactElement => {

    const[searchedMovie,setSearchedMovie] = useState<Movie[]>();

    const search = useParams();
    
    const searchFetch = async() => {
        const myHeader = {
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTI4NzQ0YzQ5NTYyNzVmOWI0ODhkOTliNmNiZjQzZSIsInN1YiI6IjY1MDMzZGFkZGI0ZWQ2MTA0MzBhNGRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uf0aTaIv1qk_OcDFze3B5Pxt5580ny9LWI43CHAXaOg',
            accept:'application/json'
        }

        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.id}`,{method:'GET',headers:myHeader});
        const data = await res.json();
        setSearchedMovie(data.results);
    }


    useEffect(() => {
        searchFetch();
    },[search])


    return(
        <div>
            <Header/>
            <h1 className={styles.page_title}>Resultados para: <span>{search.id}</span></h1>
            <div className={styles.results}>
                {searchedMovie?.map((movie):JSX.Element => {
                    return <MovieCard vote_average={movie.vote_average} title={movie.title} poster_path={movie.poster_path} id={movie.id} overview={movie.overview} key={movie.id} />
                })}
            </div>
        </div>
    )
}

export default SearchResult