import styles from './MovieCard.module.css'

import {ReactElement} from 'react'

import { Movie } from '../../types/movieType'

//Icons
import {BsStar} from 'react-icons/bs'

interface cardProps extends Movie{}

const MovieCard = (props:cardProps):ReactElement => {

    return(
        <div className={styles.movie_card}>
            <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt="" />
            <h1>{props.title}</h1>
            <span className={styles.avaliation}>
                <span><BsStar/></span>
                <p>{props.id}</p>
            </span>
            <div className={styles.btn_container}>
                <button>Detalhes</button>
            </div>
        </div>
    )
}

export default MovieCard 