import React from "react";
import MovieCard from "./MovieCard";
import movies from "../data.js";
import AddComponent from "./AddComponent";
import StarRatings from "react-star-ratings";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      inputValue: "",
      inputRating: 0
    };
  }

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  updatedMovies = array => {
    this.setState({
      movies: array
    });
  };

  changeRatingSearch = newRating => {
    this.setState({
      inputRating: newRating
    });
  };

  search = e => {
    e.preventDefault();
    if (this.state.inputValue.length !== 0) {
      var newarr = movies.filter(
        element => element.title === this.state.inputValue
      );
      this.setState({
        movies: newarr
      });
    } else {
      var newarr = movies.filter(
        element => element.rating === this.state.inputRating
      );
      this.setState({
        movies: newarr
      });
    }
  };

  render() {
    return (
      <div className="all">
        <div className="inputs">
          <div className="col-6">
            <div className="input-group">
              <input
                className="form-control border-secondary py-2"
                type="search"
                value={this.state.inputValue}
                onChange={this.updateInputValue}
              ></input>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.search}
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-5">
            <div className="input-group">
              <StarRatings
                rating={this.state.inputRating}
                changeRating={this.changeRatingSearch}
                starDimension="30px"
                starSpacing="1px"
              />
            </div>
          </div>
        </div>

        <div className="MovieContainer">
          {this.state.movies.map((element, i) => {
            return (
              <MovieCard
                title={element.title}
                description={element.description}
                image={element.image}
                key={i}
                id={i}
                rating={element.rating}
              />
            );
          })}

          <AddComponent updatedMovies={this.updatedMovies} />
        </div>
      </div>
    );
  }
}

export default ParentComponent;
