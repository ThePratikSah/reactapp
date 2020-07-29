import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      "name": "Pratik",
    }
  }

  changeName = () => {
    this.setState({
      "name": "Pratik Sah"
    })
  }

  render() {
    return(
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }

}

export default App;
