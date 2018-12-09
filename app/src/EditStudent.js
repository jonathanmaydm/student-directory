import React, { Component } from "react";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      from: "",
      funFact: "",
      cityOrCountry: "",
      indoorsOrOutdoors: "",
      travel: "",
      food: "",
      dogOrCat: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleUpdate(e) {
    this.props.handleUpdate(this.state);
  }

  render() {
    return (
      <div>
        <h1>
          <input
            name="name"
            onChange={this.handleChange}
            placeholder={this.props.student.name}
            value={this.state.name}
          />
        </h1>
        <section>
          <p>
            <strong>From:</strong>{" "}
            <input
              name="from"
              placeholder={this.props.student.from}
              value={this.state.from}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <strong>Fun fact:</strong>{" "}
            <input
              name="funFact"
              placeholder={this.props.student.funFact}
              value={this.state.funFact}
              onChange={this.handleChange}
            />
          </p>
        </section>

        <section>
          <strong>Would you rather...</strong>
          <ul>
            <li>
              <strong>...live in the city or country?</strong>{" "}
              <input
                name="cityOrCountry"
                placeholder={this.props.student.cityOrCountry}
                value={this.state.cityOrCountry}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <strong>...be indoors or outdoors?</strong>{" "}
              <input
                name="indoorsOrOutdoors"
                placeholder={this.props.student.indoorsOrOutdoors}
                value={this.state.indoorsOrOutdoors}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <strong>...travel every day or never leave home?</strong>{" "}
              <input
                name="travel"
                placeholder={this.props.student.travel}
                value={this.state.travel}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <strong>...eat at Top's or Subway?</strong>{" "}
              <input
                name="food"
                placeholder={this.props.student.food}
                value={this.state.food}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <strong>...have a dog or a cat?</strong>{" "}
              <input
                name="dogOrCat"
                placeholder={this.props.student.dogOrCat}
                value={this.state.dogOrCat}
                onChange={this.handleChange}
              />
            </li>
          </ul>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <button onClick={this.props.handleCancel}>Cancel</button>
          <button onClick={this.handleUpdate}>Save</button>
        </section>
      </div>
    );
  }
}

export default EditStudent;
