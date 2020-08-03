import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div onClick={this.props.click}>
        <h1 className="personName">{this.props.name}</h1>
        <p className="personName">{this.props.age}</p>
      </div>
    );
  }
}

export default Person;