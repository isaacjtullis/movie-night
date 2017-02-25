import React, {Component} from 'react';
import api from './test/api.jsx';
import MovieList from './MovieList.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
    }
  }

  getMoviePosts(){
    api.getMovies().then((res)=>{
      this.setState({
        movies: res.results
      })
    });
  }
  componentWillMount(){
    this.getMoviePosts()
  }

  render() {
    return (
      <div className="Row">
        <div className="banner">
          <h1>Welcome to Movie Circus!</h1>
        </div>
        <div><MovieList movies={this.state.movies}/></div>
      </div>
    );
  }
}
export default App;
