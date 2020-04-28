const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];


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
        id: Math.random()
    }
    movies.push(newMovie);
    console.log(newMovie);
}

const addMovieAfterEnter = (e) => {
    const x = e.keyCode;
    if (x === 13) {
        console.log(e);
        addMovieHandler();
    }
}

addMovieBtn.addEventListener("click", addMovieHandler);
addMovieBtn.addEventListener("keypress", addMovieAfterEnter);