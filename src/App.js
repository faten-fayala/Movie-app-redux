import React from 'react';
import Header from './header';
import Movies from './movies';
import AddModal from "./Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux";
import { addNewMovie} from "./Actions/moviesAction"; 
import { search} from "./Actions/moviesAction"; 
import { setRate} from "./Actions/moviesAction"; 


class App extends React.Component{
  constructor(props){
  super(props)
  this.state={
    keyword:"",
    rating: 1
  }
}
search = (keyword) =>{
 
  this.setState({
    keyword: keyword
  })
}
setRate = number =>{
  this.setState({
    rating: number
  })
}

addNewMovie = movie => {
  this.props.addNewMovie(this.state)
}

  render()
  {return (
    <div className="App">
      <Header rating={this.state.rating} setRate={x => this.setRate(x)} search={x => this.search(x)} />
      <div className="movies-section">
          <Movies text={this.state.keyword} rating={this.state.rating} addNewMovie={x => this.addNewMovie(x)} data={this.props.movies} /> 
          
         
        </div>
      
       
        
    </div>
  );}
}

const mapStateToProps = state => {
  return {
    movies: state.MovieReducer.MoviesDescription
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(addNewMovie(newMovie)),
   search: (name,rating)=> dispatch(search(name,rating)),
   setRate: rating=> dispatch(setRate(rating)),
  
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
