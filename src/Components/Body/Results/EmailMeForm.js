import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const EmailMeForm = (props) => {
	console.log(7, props);
	const {TopResult} = props;
	const [emailAddy, setEmail] = useState({
		email: ""
	})
	const [emailerr, setEmailerr] = useState("")

	// console.log(10, emailAddy);
	const doChange = (e) => {
		setEmail({ [e.target.name]: e.target.value })
	}

	const doSubmit = (e, emailAddy) => {
		e.preventDefault();
		console.log(17, emailAddy.email);
		if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(emailAddy.email)) {
			console.log(18, TopResult);
		} else {
			setEmailerr("Nope.")
			setEmail({email: ""})
		}
	}


  return (
    <Fade>
      <div
        style={{
          minWidth: "99vw",
          height: "auto",
          //   border: "1px solid black",
        }}
      >
        <div class="row">
          <form onSubmit={(e) => doSubmit(e, emailAddy, TopResult)}
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
				  <EmailErr>{emailerr}</EmailErr>
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
				<input name="email" id="icon_prefix" type="text" class="validate"
					onChange={doChange} value={emailAddy.email} />
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
            <Link to="/results/">
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
  min-width: 275px;
`;

const EmailErr = styled.div`
  min-height: 2rem;
`;

export default EmailMeForm;
