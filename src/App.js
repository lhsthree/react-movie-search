import React, { Component } from 'react';
import "./style.css"
import SearchMovies from "./SearchMovies.js"

class App extends Component {
  render(){
     return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );

  }
 
}

export default App;
