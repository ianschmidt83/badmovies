import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };
    
    // bind functions as appropriate
    this.swapFavorites = this.swapFavorites.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  getMovies(genreId) {
    axios.get('/search', {
      params: {
        id: genreId
      }
    }).then( (response) => {
      this.setState({
        movies: response.data,
      })
    }).catch( (err) => {
      console.log(err)
    })
  }

  getFavorites() {
    console.log('getting faves');
    axios.get('/favorites')
      .then( (response) => {
        this.setState({
          movies: response.data
        })
      }).catch( (err) => {
        console.log(err)
      })
  }

  saveMovie(movie) {
    axios.post('/save', movie)
          .then( (response) => {
            this.setState({
              favorites: response.data
            })
          }).catch( (err) => {
            console.log(err);
          })
  }

  deleteMovie() {
    axios.post('/delete', movie)
          .then( (response) => {
            this.setState({
              favorites: response.data
            })
          }).catch( (err) => {
            console.log(err);
          })
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  componentDidMount() {
    this.getFavorites();
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search getMovies={this.getMovies} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies 
          movies={this.state.showFaves ? this.state.favorites : this.state.movies} 
          showFaves={this.state.showFaves}
          saveMovie={this.saveMovie}
          />
        </div>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));