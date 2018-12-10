import React, { Component } from "react";
import Header from "./components/Header";
import StudentContainer from "./components/StudentContainer";
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
