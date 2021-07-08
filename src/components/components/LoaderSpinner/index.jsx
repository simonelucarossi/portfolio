import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  //other logic
  render() {
    return (
        
        <div className="backgroundSpinner">
            <Loader
            type="MutatingDots"
            color="#00BFFF"
            secondaryColor="red"
            height={150}
            width={150}
            timeout={3000} //3 secs
            /
            >
        </div>
    );
  }
}