//PSUEDO CODE

//click submit button
//take input.value from all inputs and place their binding in an oject
//math.rand id value for each individual object created
//place each object in an array? (push) when created

//new func that is called when object is created
//create list item
//append list item to div/body
//take key/properties from object and display on list

//
//need to learn about forms to be able to save each movies... then you can have all the movies and pick 3 random movies from array obj list
//maybe put a random button and pick random object from array list and delte the other ones

const movies = [];

const createListItem = () => {

}

const movieObject = () => {
    const fname = document.getElementById("fname").nodeValue;

    const newMovie = {
        movieName: fname,
        id: Math.random()
    }
}