


const getMovies= async ()=>{
    const response = await fetch('https://api.themoviedb.org/3/discover/movie'+'?api_key='+'34713abba31235292ef755be25fd8bd7');
    const dataMoviesJson= await response.json();
    return dataMoviesJson;
}


export default getMovies;