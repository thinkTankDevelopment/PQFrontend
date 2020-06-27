import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const EmailMeForm = () => {
  return (
    <Fade>
      <div
        style={{
          minWidth: "99vw",
          height: "auto",
          border: "1px solid black",
        }}
      >
        <div class="row">
          <form
            class="col s12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              class="row"
              style={{
                width: "50%",
              }}
            >
              <div
                class="input-field col s6 "
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <i
                  class="material-icons prefix teal-text"
                  style={{ fontSize: "3em", textColor: "teal" }}
                >
                  email
                </i>
                <input id="icon_prefix" type="text" class="validate"></input>
                <label for="icon_prefix">Email Address</label>
              </div>
            </div>
          </form>{" "}
          <div
            style={{
              minWidth: "99vw",
              height: "auto",
              //   border: "1px solid red",
            }}
          >
            <Link
              to="/"
              style={{
                margin: "1em",
              }}
            >
              <Button className="waves-effect waves-light btn">
                <i class="material-icons left">autorenew</i>
                Back to start
              </Button>
            </Link>
            <Link
              to="/results/"
              style={{
                margin: "1em",
              }}
            >
              <Button className="waves-effect waves-light btn">
                <i class="material-icons right">send</i>
                Email me my results.
              </Button>
            </Link>
            <p>**Personal information is not collected**</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

const Button = styled.footer`
  margin-bottom: 20px;
`;

export default EmailMeForm;