import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
    };
  }
  getGenres() {
    axios.get('/genres') 
         .then( (response) => {
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

export default Search;