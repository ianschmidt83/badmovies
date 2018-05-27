var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();

var apiHelpers = require('./apiHelpers.js');

app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
	/*
	https://api.themoviedb.org/3/discover/movie?api_key= <insert API key>  
	&language=en-US
	&sort_by=vote_average.asc
	&include_adult=false
	&page=1
	&primary_release_date.lte=2017
	&vote_average.lte=3
	&with_genres= <insert genre number here>
	*/

    // get the search genre     

    // https://www.themoviedb.org/account/signup

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
});

app.get('/genres', function(req, res) {
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

/*
"genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
]
*/
});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
