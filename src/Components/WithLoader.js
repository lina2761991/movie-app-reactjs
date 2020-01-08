import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const WithLoader = BaseComponent => {
  class EnhancedComponent extends React.Component {
    state = {
      data: null
    };

    componentWillMount() {
      setTimeout(() => {
        this.setState({
          data: true
        });
      }, 1000);
    }

    render() {
      if (!this.state.data) {
        return (
          <div>
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={400}
              width={500}
              timeout={3000} //3 secs
            />
          </div>
        );
      }

      return <BaseComponent data={this.state.data} {...this.props} />;
    }
  }

  return EnhancedComponent;
};

export default WithLoader;
