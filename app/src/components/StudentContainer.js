import React, { Component } from "react";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import Student from "./Student";
import students from "../students";

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students,
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
    const students = [...this.state.students];
    students.splice(this.state.index, 1);
    this.setState({
      students,
      index: this.state.index === 0 ? 0 : this.state.index - 1
    });
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  handleAdd() {
    this.setState({ add: true });
  }
  handleSave(student) {
    const students = [...this.state.students];
    students.push(student);
    this.setState({ students, add: false, index: this.state.students.length });
  }

  handleCancel() {
    this.setState({ edit: false, add: false });
  }

  handleUpdate(student) {
    const students = [...this.state.students];
    students.splice(this.state.index, 1, student);
    this.setState({ students, edit: false });
  }

  render() {
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
