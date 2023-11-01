import styles from './MovieCard.module.css'

import {ReactElement} from 'react'

import { Movie } from '../../types/movieType'

//Icons
import {BsStar} from 'react-icons/bs'

import { Link } from 'react-router-dom'

interface cardProps extends Movie{}

const MovieCard = (props:cardProps):ReactElement => {

    return(
        <div className={styles.movie_card}>
            <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt="" />
            <h1>{props.title}</h1>
            <span className={styles.avaliation}>
                <span><BsStar/></span>
                <p>{props.vote_average}</p>
            </span>
            <div className={styles.btn_container}>
                <Link to={`movie/${props.id}`}>Detalhes</Link>
            </div>
        </div>
    )
}

export default MovieCard 