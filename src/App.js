import FavoriteMovies from "./components/FavoriteMovies/FavoriteMovies.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import Movies from "./components/Movies/Movies.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Search from "./components/Search/Search.jsx";
import { Route} from "react-router-dom";
import './App.css';
export default function App() {
  return (
    <div>
        <NavBar/>
        <Route exact path="/" component={Search}/>
        <Route exact path="/" component={Movies}/>
        <Route path="/favorites" component={FavoriteMovies}/>
        <Route path="/detail/:id" component={MovieDetail}/>
    </div>
  );
}

