import React from "react";
import StarRatings from "react-star-ratings";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <div className="movie-card card">
          <img className="card-img-top" src={this.props.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>

            <p className="card-subtitle mb-2 text-muted">
              {this.props.description}
            </p>
          </div>
          <div className="card-footer">
            <div className="clearfix">
              <div className="float-left mt-1">
                <StarRatings
                  rating={this.props.rating}
                  starDimension="30px"
                  starSpacing="1px"
                />
              </div>
              <div className="card-footer-badge float-right badge badge-primary badge-pill">
                {this.props.rating}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
