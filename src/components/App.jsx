import React from "react";
import "../App.css";

class App extends React.Component {

  state = {
    "header": "Heder from state",
  }

  buttonChangeHandler = () => {
    this.setState({
      "header": "The header text changed!",
    });
  }

  render() {
    return(
      <>
      <h1>{this.state.header}</h1>
      <button onClick={this.buttonChangeHandler}>Click to change</button>
      </>
    );
  }
}

export default App;
