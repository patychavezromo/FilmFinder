import getMovies from './clientTMDB/clientTMDB.js'
// const express = require('express')
// import * as express from 'express'
import express from 'express';
const app = express()
const port = 3000


// app.get('/', async (req, res) => {
//     const response = await fetch('https://api.themoviedb.org/3/discover/movie'+'?api_key='+'34713abba31235292ef755be25fd8bd7');
//     const dataMoviesJson= await response.json()
//     res.send(dataMoviesJson)
// })

app.get('/', async (req, res) => {
    const response = await getMovies();
    res.send(response);
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})