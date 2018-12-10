import React, { Component } from "react";

class AddStudent extends Component {
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
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSave(e) {
    this.props.handleSave(this.state);
  }

  render() {
    return (
      <div>
        <h1>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="Name"
          />
        </h1>
        <section>
          <p>
            <strong>From:</strong>{" "}
            <input
              value={this.state.from}
              onChange={this.handleChange}
              name="from"
            />
          </p>
          <p>
            <strong>Fun fact:</strong>{" "}
            <input
              value={this.state.funFact}
              onChange={this.handleChange}
              name="funFact"
            />
          </p>
        </section>

        <section>
          <strong>Would you rather...</strong>
          <ul>
            <li>
              <strong>...live in the city or country?</strong>{" "}
              <input
                value={this.state.cityOrCountry}
                onChange={this.handleChange}
                name="cityOrCountry"
              />
            </li>
            <li>
              <strong>...be indoors or outdoors?</strong>{" "}
              <input
                value={this.state.indoorsOrOutdoors}
                onChange={this.handleChange}
                name="indoorsOrOutdoors"
              />
            </li>
            <li>
              <strong>...travel every day or never leave home?</strong>{" "}
              <input
                value={this.state.travel}
                onChange={this.handleChange}
                name="travel"
              />
            </li>
            <li>
              <strong>...eat at Top's or Subway?</strong>{" "}
              <input
                value={this.state.food}
                onChange={this.handleChange}
                name="food"
              />
            </li>
            <li>
              <strong>...have a dog or a cat?</strong>{" "}
              <input
                value={this.state.dogOrCat}
                onChange={this.handleChange}
                name="dogOrCat"
              />
            </li>
          </ul>
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <button onClick={this.props.handleCancel}>Cancel</button>
            <button onClick={this.handleSave}>Save</button>
          </section>
        </section>
      </div>
    );
  }
}

export default AddStudent;
