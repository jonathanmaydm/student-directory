import React, { Component } from "react";
import axios from "axios";

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    axios
      .get("https://wdl21.now.sh/api/students")
      .then(response => this.setState({ students: response.data }));
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {this.state.students.map((student, i) => (
          <a href={`/students/${student.id || i}`}>
            <div className="card">
              <h2>{student.name}</h2>
              <h3>{student.from}</h3>
            </div>
          </a>
        ))}
      </div>
    );
  }
}

export default StudentsList;
