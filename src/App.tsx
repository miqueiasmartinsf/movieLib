import './App.css'

//React Router
import { BrowserRouter,Routes,Route } from 'react-router-dom'

//Routes
import Home from './routes/Home/Home'
import Movie from './routes/MoviePage/MoviePage'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/movie/:id' Component={Movie} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
