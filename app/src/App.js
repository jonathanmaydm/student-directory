import React, { Component } from "react";
import Header from "./Header";
import StudentContainer from "./StudentContainer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <StudentContainer />
      </div>
    );
  }
}

export default App;
