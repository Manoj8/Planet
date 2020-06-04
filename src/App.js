import React, { Component } from "react";
import "./App.css";
import Planet from "./components/Planet";
import Favourites from "./components/favourite";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    i1: [],
  };

  componentDidMount() {
    fetch(`https://assignment-machstatz.herokuapp.com/planet`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          i1: json,
        });
      });
  }
  render() {
    let data = this.state.i1;
    return (
      <div>
        <h1> Planets </h1>
        <Route exact path="/" render={() => <Planet data={data} />} />

        <Route exact path="/Favourite" component={Favourites} />
      </div>
    );
  }
}

export default App;
