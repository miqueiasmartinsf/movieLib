import styles from "./Header.module.css";

//Types
import { ReactElement } from "react";

//Icons
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

//Hooks
import { useState } from "react";

//Types
import { Movie } from "../../types/movieType";
import { Request } from "../../types/requestType";

//ReactRouter 
import { Link } from "react-router-dom";

const Header = (): ReactElement => {

    const[search,setSearch] = useState<string>('');

    return (
        <header>
            <Link to={'/'} className={styles.logo}>
                <span>
                    <BiCameraMovie />
                </span>
                <h1>MoviesLib</h1>
            </Link>
            <div className={styles.input_container}>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Busque por um filme"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Link to={search.length === 0 ? ('') : (`/search/${search}`)}>
                    <AiOutlineSearch />
                </Link>
            </div>
        </header>
    );
};

export default Header;
