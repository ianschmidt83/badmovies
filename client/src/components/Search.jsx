import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [
        {
            "id": 28,
            "name": "Action"
        },
      ],
    };

    this.bobo = document.getElementById('genres')
  } 
  getGenres() {
    axios.get('/genres') // No params needed.
         .then( (response) => {
           console.log(response);
           // The response will contain a list of genres
           // push the list into this.state.genres
           /*
           {
            "id": 28,
            "name": "Action"
           },
           {
            "id": 12,
            "name": "Adventure"
           }, */

         }).catch( (err) => {
          console.log(err);
         })
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES

  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
     
        <select id="genres">
          {
            this.state.genres.map(function (genre, idx, ary) {
              return(<option value={genre.id}>{genre.name}</option>)
            })
          }
        </select>
        <br/><br/>

        <button 
          onClick={ () => {this.props.getMovies(
            console.log(this.state.bobo)
          )} }
        >Search</button>

      </div>
    );
  }


}

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



export default Search;