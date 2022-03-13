export let movies =[
    {
    id:0,
    name:"Star Wars",
    score:1
},
    {
    id:1,
    name:"Avengers",
    score:8
},
    {
    id:2,
    name:"Logan",
    score:2
},
    {
    id:3,
    name:"The Godfather I",
    score:99
},
    {
    id:4,
    name:"Spider Man",
    score:7
}

];

export const getMovies = () => movies;

export const getById = id =>{
    const filterMovies = movies.filter(movie => movie.id === id);
    return filterMovies[0];
}
export const deleteMovie = (id) =>{
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else {
        return false;
    }
}

export const addMovie = (name,score) =>{
    const newMovie ={
        id:`${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};
