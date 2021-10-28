const express = require('express');
const app = express();
const port = 3000;
// include path package
const path = require('path');
// include body parser
const bodyParser = require('body-parser');

// parseapplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    // display welcome message 
    res.send('Welcome to Data Representation & Querying');
})

// use /hello/name in url to get the name 
app.get('/hello/:name', (req, res) => {
    // log name entered in url to console
    console.log(req.params.name);
    // display on page hello and name entered
    res.send('Hello ' + req.params.name);
})

app.get('/api/movies', (req, res) => {
    // create a const to hold the json data
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    // send data from server to client
    res.json({ movies: myMovies });
});

app.get('/test', (req, res) => {
    // send the index.html file
    // use path package to get the directory 
    res.sendFile(__dirname + '/index.html');
})

app.get('/name', (req, res) => {
    // get method sends data as part of url
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

app.post('/name', (req, res) => {
    // post method sends data as part of body (more private)
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})