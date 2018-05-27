import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [
        {
            "id": 28,
            "name": "Action"
        },
      ]
    };
  }
  getGenres() {
    axios.get('/genres') // No params needed.
         .then( (response) => {
           // console.log(response);
           this.setState({
             genres: response.data,
           })

         }).catch( (err) => {
          console.log(err);
         })
  }

  componentDidMount() {
    this.getGenres();
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
            onClick={ (e) => {
              e.preventDefault()
              this.props.getMovies(document.getElementById('genres').value)
            } }
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