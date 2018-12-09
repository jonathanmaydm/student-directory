import React from "react";

const Student = props => (
  <div>
    <h1>{props.student.name}</h1>
    <section>
      <p>
        <strong>From:</strong> {props.student.from}
      </p>
      <p>
        <strong>Fun fact:</strong> {props.student.funFact}
      </p>
    </section>

    <section>
      <strong>Would you rather...</strong>
      <ul>
        <li>
          <strong>...live in the city or country?</strong>{" "}
          {props.student.cityOrCountry}
        </li>
        <li>
          <strong>...be indoors or outdoors?</strong>{" "}
          {props.student.indoorsOrOutdoors}
        </li>
        <li>
          <strong>...travel every day or never leave home?</strong>{" "}
          {props.student.travel}
        </li>
        <li>
          <strong>...eat at Top's or Subway?</strong> {props.student.food}
        </li>
        <li>
          <strong>...have a dog or a cat?</strong> {props.student.dogOrCat}
        </li>
      </ul>
    </section>
  </div>
);

export default Student;
