import { ReactElement } from "react"


//Components
import Header from "./components/Header/Header"
import ShowCase from "./components/ShowCase/ShowCase"


const Home = ():ReactElement => {

    return(
        <div>
            <Header/>    
            <ShowCase/>
        </div>
    )
}

export default Home 