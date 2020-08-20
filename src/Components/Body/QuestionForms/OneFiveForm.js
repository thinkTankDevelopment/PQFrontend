import React from "react";
import styled from "styled-components";

function OneFiveForm({ questionKey, surveyInfo, handleChange }) {
  return (
    <div>
      <Form action="#">
        <RadioButtonContainer>
          <Strong className="pink-text text-darken-4">
            <p>Disagree </p>
          </Strong>
          <RadioButton>
            <label style={{ transform: "scale(1.65)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={1}
                className="with-gap teal-text"
                name={questionKey}
                checked={surveyInfo[questionKey] === "1"}
                type="radio"
              />

              <Strong className="pink-text text-darken-3">1</Strong>
            </label>
          </RadioButton>
          <br />
          <RadioButton>
            <label style={{ transform: "scale(1.3)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={2}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "2"}
                type="radio"
              />
              <Strong className="pink-text text-darken-2 ">2</Strong>
            </label>
          </RadioButton>

          <RadioButton>
            <label style={{ transform: "scale(1)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={3}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "3"}
                type="radio"
              />
              <Strong>3</Strong>
            </label>
          </RadioButton>

          <RadioButton>
            <label style={{ transform: "scale(1.3)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={4}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "4"}
                type="radio"
              />
              <Strong className="teal-text text-darken-1">4</Strong>
            </label>
          </RadioButton>

          <RadioButton>
            <label style={{ transform: "scale(1.65)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={5}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "5"}
                type="radio"
              />
              <Strong className="teal-text text-darken-2">5</Strong>
            </label>
          </RadioButton>
          <Strong className="teal-text text-darken-3">
            <p> Agree</p>
          </Strong>
        </RadioButtonContainer>
      </Form>
    </div>
  );
}
const Form = styled.form`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;
const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50vw;
  /* border: 1px solid blue; */
`;

const RadioButton = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0em 1em;
`;

// const Input = styled.input`
//   color: red;
//   font-size: 5em;
//   /* border: 1px solid blue !important;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0em 1em; */
// `;

const Strong = styled.span`
  font-weight: 700;
  color: black;
  /* border: 1px solid purple; */
`;

const Label = styled.label`
  /* font-size: 1em !important; */
  font-weight: 900;
  text-decoration-color: blue;
`;
export default OneFiveForm;
