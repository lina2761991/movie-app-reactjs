import React from "react";
import image from "../images/add.png";
import movies from "../data.js";
import StarRatings from "react-star-ratings";

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputDesc: "",
      inputImage: "",
      rating: 0,
      file: null
    };
  }
  changeRating = newRating => {
    this.setState({
      rating: newRating
    });
  };
  updateInputName = evt => {
    this.setState({
      inputName: evt.target.value
    });
  };

  updateInputDesc = evt => {
    this.setState({
      inputDesc: evt.target.value
    });
  };

  updateInputImage = evt => {
    this.setState({
      inputImage: evt.target.value
    });
  };

  add = e => {
    let newMovie = {
      title: this.state.inputName,
      id: movies[movies.length - 1].id + 1,
      description: this.state.inputDesc,
      image: this.state.inputImage,
      rating: this.state.rating
    };
    movies.push(newMovie);

    this.props.updatedMovies(movies);

    this.setState({
      inputValue: ""
    });

    console.log(this.state.file);
  };

  onChangeHandler = event => {
    this.setState({
      inputImage: event.target.files[0].name
    });

    console.log(this.state.file);
  };

  render() {
    return (
      <div className="movie-card">
        <img src={image} className="logo" alt="..." />

        <div className="card-body">
          <button
            id="button1"
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@getbootstrap"
          >
            ADD NEW MOVIE
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    New movie
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        value={this.state.inputName}
                        onChange={this.updateInputName}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message-text" className="col-form-label">
                        Description:
                      </label>
                      <textarea
                        className="form-control"
                        id="message-text"
                        value={this.state.inputDesc}
                        onChange={this.updateInputDesc}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Image:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        value={this.state.inputImage}
                        onChange={this.updateInputImage}
                      ></input>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Rating:
                      </label>
                      <StarRatings
                        rating={this.state.rating}
                        changeRating={this.changeRating}
                        starDimension="30px"
                        starSpacing="1px"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.add}
                  >
                    Add movie
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddComponent;
