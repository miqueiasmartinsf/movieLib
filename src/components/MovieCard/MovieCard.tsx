import styles from './MovieCard.module.css'

import {ReactElement} from 'react'


const MovieCard = ():ReactElement => {

    return(
        <div className={styles.movie_card}>
            <img src="" alt="" />

            <h1></h1>

            <span></span>

            <button> Detalhes </button>
        </div>
    )
}

export default MovieCard 