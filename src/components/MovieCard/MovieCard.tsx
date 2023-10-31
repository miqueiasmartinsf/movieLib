import styles from './MovieCard.module.css'

import {ReactElement} from 'react'

import { Movie } from '../../types/movieType'

interface cardProps extends Movie{}

const MovieCard = (props:cardProps):ReactElement => {

    return(
        <div className={styles.movie_card}>
            <img src="" alt="" />
            <h1>{props.title}</h1>
            <span>{props.vote_avarage}</span>
            <button> Detalhes </button>
        </div>
    )
}

export default MovieCard 