import React from "react"
import Person from "./Person";

class App extends React.Component {
  state = {
    person: [
      { name: "Pratik", age: 21 },
      { name: "Shashank", age: 22 }
    ],
    show: true
  }
  
  toggleContent = () => {
    let showState = this.state.show;
    this.setState({show: !showState});
  }
  
  deletePerson = (personIndex) => {
    const person = this.state.person;
    person.splice(personIndex, 1);
    this.setState({person: person});
  }
  
  render () {
    let persons = null;
    if (this.state.show) {
      persons = (
        this.state.person.map((persons, index) => {
          return <Person click={() => this.deletePerson(index)} name={persons.name} age={persons.age}/>
        })
      )
    }
    
    return (
      <>
        <button onClick={this.toggleContent}>Toggle</button>
        {persons}
      </>
    );
  }
}

export default App