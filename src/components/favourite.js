import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../App.css";

class Favourite extends Component {
  state = {
    items: this.props.location.data,
  };
  removeItem = (i) => {
    const list = this.state.items;

    list.splice(i, 1);
    this.setState({ items: list });
  };

  render() {
    let data = this.state.items;
    let displayFavs = [];
    displayFavs =
      data === undefined
        ? ""
        : data.map((planet, i) => {
            return planet.isFavourite ? (
              <div key={i}>
                <Card className="card">
                  <FontAwesomeIcon
                    icon={faHeart}
                    id={i}
                    onClick={(e) => {
                      planet.isFavourite = false;
                      this.removeItem(i);
                    }}
                    className={planet.isFavourite ? "like heart" : "dislike heart"}
                  ></FontAwesomeIcon>
                  <h2>{planet.name}</h2>
                </Card>
              </div>
            ) : (
              ""
            );
          });

    return (
      <div className="app">
        {displayFavs.length === 0 ? <h1>No Items are selected as Favourite</h1> : ""}
        {displayFavs}
        <Link to="/">
          <button className="go-back"></button>
        </Link>
      </div>
    );
  }
}

export default Favourite;
