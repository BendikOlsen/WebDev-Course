var movies = [
    {
    title: "The Punisher",
    genre: "Action",
    releaseYear: 1998,
    rating: 4.5,
    watched: true, 
    },
    {
    title: "BraveHeart",
    genre: "Drama",
    releaseYear: 1998,
    rating: 5,
    watched: true,  
    },
    {
    title: "Los Piotes del mar",
    genre: "Erotic",
    releaseYear: 1970,
    rating: 1.5,
    watched: false,  
    }
]


movies.forEach (function(movie){
    console.log (buildString(movie));
})

function buildString(movie){
    var result = "You have ";
    if(movie.watched){
        result += "wathced ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars" + "\" - ";
    result += movie.genre + " genre" + "\" - ";
    result += movie.releaseYear + " releaseYear" + "\" - ";
    return result;
};