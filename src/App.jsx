import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import MyNavbar from "./Components/MyNavBar/MyNavbar";
import React, { useState } from "react";
import AddMovie from "./Components/AddMovie/AddMovie";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviePage from "./Components/MoviePage/MoviePage";

function App() {
    let moviesData = [
        {
            id: 1,
            title: "Titanic",
            description:
                "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
            rate: 4,
            trailer: (
                <iframe
                    width="1046"
                    height="445"
                    src="https://www.youtube.com/embed/kVrqfYjkTdQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
        },
        {
            id: 2,
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
            rate: 5,
            trailer: (
                <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/NmzuHjWmXOc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
        },
        {
            id: 3,
            title: "The Godfather",
            description:
                "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
            rate: 5,
            trailer: (
                <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/CWoQlDlyQj4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
        },
        {
            id: 4,
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rate: 5,
            trailer: (
                <iframe
                    width="1046"
                    height="445"
                    src="https://www.youtube.com/embed/EXeTwQWrcwY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
        },
        {
            id: 5,
            title: "12 Angry Men",
            description:
                "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            rate: 4,
            trailer: (
                <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/2L4IhbF2WK0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
        },
        {
            id: 6,
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rate: 3,
            trailer: (
                <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/gG22XNhtnoY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
        },
        {
            id: 7,
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
            rate: 4,
            trailer: (
                <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/5ZAhzsi1ybM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
        },
        {
            id: 8,
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
            rate: 2,
            trailer: (
                <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/r5X-hFf6Bwo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
        },
    ];
    const [rateSearch, setRateSearch] = useState(0);
    const [titleSearch, setTitleSearch] = useState("");
    const [movies, setMovies] = useState(moviesData);
    const getRateSearch = (inputrate) => {
        setRateSearch(inputrate);
    };
    const getTitleSearch = (inputtitle) => {
        setTitleSearch(inputtitle);
    };
    const getNewMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <MyNavbar
                    getRateSearch={getRateSearch}
                    getTitleSearch={getTitleSearch}
                />
                <Switch>
                    <Route exact path="/">
                        <h1>Go to watch</h1>
                    </Route>
                    <Route exact path="/movies">
                        <div className="Addmovie">
                            <AddMovie getNewMovie={getNewMovie} />
                        </div>
                        <MovieList
                            moviesData={movies}
                            rateSearch={rateSearch}
                            titleSearch={titleSearch}
                        />
                    </Route>
                    <Route path="/trailer/:id">
                        <MoviePage movie={moviesData} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
