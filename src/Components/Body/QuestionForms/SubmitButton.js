import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubmitButton = () => {
  return (
    <Link to="/results/">
      <Button className="waves-effect waves-light btn">
        <i className="material-icons right ">send</i>See my results!
      </Button>
    </Link>
  );
};
const Button = styled.footer`
  margin-bottom: 0px;
  min-width: 175px;
`;

// make same size as the other buttons

export default SubmitButton;
