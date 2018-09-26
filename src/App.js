// class based components
import React, { Component } from "react";
import AddNinja from "./components/AddNinja";

import Ninjas from "./components/Ninjas";
import "./App.css";

class App extends Component {
  state = {
    ninjas: [
      { name: "ALi", belt: "black", id: "1", age: "20" },
      { name: "alzz", belt: "red", id: "2", age: "30" },
      { name: "AL", belt: "white", id: "3", age: "40" }
    ]
  };

  handleClick = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
  };
  render() {
    return (
      <div>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
