import React, { Component } from "react";
import axios from "axios";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import Student from "./Student";

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      index: 0,
      edit: false,
      add: false
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://dm20.now.sh/students")
      .then(response => this.setState({ students: response.data }));
  }

  handlePrevious() {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: this.state.students.length - 1 });
    }
  }

  handleNext() {
    if (this.state.index < this.state.students.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  }

  handleDelete() {
    axios
      .delete("https://dm20.now.sh/students/" + this.state.index)
      .then(response => {
        this.setState({
          students: response.data,
          index: this.state.index === 0 ? 0 : this.state.index - 1
        });
      });
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  handleAdd() {
    this.setState({ add: true });
  }
  handleSave(student) {
    axios.post("https://dm20.now.sh/students/", student).then(response => {
      this.setState({
        students: response.data,
        add: false,
        index: response.data.length - 1
      });
    });
  }

  handleCancel() {
    this.setState({ edit: false, add: false });
  }

  handleUpdate(student) {
    axios
      .put(`https://dm20.now.sh/students/${this.state.index}`, student)
      .then(response => {
        this.setState({ students: response.data, edit: false });
      });
  }

  render() {
    if (!this.state.students.length) {
      return (
        <main>
          <h1>Loading...</h1>
        </main>
      );
    }
    return (
      <main>
        <aside>
          {this.state.index + 1} / {this.state.students.length}
        </aside>
        {this.state.edit ? (
          <EditStudent
            handleCancel={this.handleCancel}
            handleUpdate={this.handleUpdate}
            student={this.state.students[this.state.index]}
          />
        ) : this.state.add ? (
          <AddStudent
            handleSave={this.handleSave}
            handleCancel={this.handleCancel}
          />
        ) : (
          <Student student={this.state.students[this.state.index]} />
        )}
        <nav>
          <button onClick={this.handlePrevious}>&lt; Previous</button>
          <div>
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleAdd}>Add</button>
          </div>
          <button onClick={this.handleNext}>Next &gt;</button>
        </nav>
      </main>
    );
  }
}

export default StudentContainer;
