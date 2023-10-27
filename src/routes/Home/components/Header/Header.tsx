import styles from './Header.module.css'


//Types
import {ReactElement} from 'react'

//Icons
import {BiCameraMovie} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = ():ReactElement => {

    return(
        <header>
            <a href="" className={styles.logo}>
                <span><BiCameraMovie/></span>
                <h1>MoviesLib</h1>
            </a>
            <div className={styles.input_container}>
                <input type="text" name="" id="" />
                <button><AiOutlineSearch/></button>
            </div>       
        </header>
    )
}

export default Header 