import "./App.css";

//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Routes
import Home from "./routes/Home/Home";
import Movie from "./routes/MoviePage/MoviePage";
import SearchResult from "./routes/SearchResult/SearchResult";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/movie/:id" Component={Movie} />
                    <Route path="/search/:id" Component={SearchResult} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
