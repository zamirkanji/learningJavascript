const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const bodyContainer = document.querySelector(".body-container");

const movies = [];


const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");

    if (movies.length === 0) {
        movieList.classList.remove("visible");
        return;
    } else {
        movieList.classList.add("visible");
    }

    movieList.innerHTML = "";

    const filteredMovies = !filter
        ? movies
        : movies.filter(movie => {
        movie.info.movieTitle.includes(filter)

        //check if movie title includes "filterTerm"
    })

    filteredMovies.forEach(movie => { //for each movie(arg, param) in movies array, create li
        const movieEl = document.createElement("li");
        let text = movie.info.movieTitle + " - ";
        for (const key in movie.info) {
            if (key !== "movieTitle") {
                text = text + `${key}: ${movie.info[key]}`; //
            }
        }
        movieEl.textContent = text;
        movieList.appendChild(movieEl);
    })
    bodyContainer.appendChild(movieList);
}

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (
        title.trim() === "" ||
        extraName.trim() === "" ||
        extraValue.trim() === ""
    ) {
        return;
    }

    const newMovie = {
        info: {
            movieTitle: title,
            [extraName]: extraValue
        },
        id: Math.random().toString()
    }
    movies.push(newMovie);

    console.log(newMovie);
    renderMovies(); //create li for each movie and append to movieList 
}


const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
}


const addMovieAfterEnter = (event) => {
    const x = event.keyCode;
    if (x === 13) {
        console.log(event);
        addMovieHandler; //callback function 
    }
}

addMovieBtn.addEventListener("click", addMovieHandler);
addMovieBtn.addEventListener("keypress", addMovieAfterEnter);
searchBtn.addEventListener("click", searchMovieHandler);