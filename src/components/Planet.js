import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    id: null,
  };

  render() {
    let data = this.props.data;
    let favItem = [];
    let display = data.map((planet, i) => {
      if (planet.isFavourite) favItem.push(planet);
      return (
        <div key={i}>
          <Card className="card">
            <FontAwesomeIcon
              id={i}
              icon={faHeart}
              onClick={(e) => {
                planet.isFavourite = !planet.isFavourite;
                this.setState({ id: i });
              }}
              className={planet.isFavourite ? "like heart" : "dislike heart"}
            ></FontAwesomeIcon>
            <h2>{planet.name}</h2>
          </Card>
        </div>
      );
    });

    return (
      <div className="app">
        {display}

        <Link to={{ pathname: "/Favourite", data: favItem }}>
          <button className="open-fav"></button>
        </Link>
      </div>
    );
  }
}

export default App;
