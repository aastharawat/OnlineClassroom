/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { Grid, Button, TextField, Modal } from "@material-ui/core";
import { SignUp } from "./SignUp";
import React, { useContext } from "react";
import styled from "@emotion/styled";
import AuthService from "../../services/authService";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/authContext";
const styledSignUpPage = css`
  border-radius: 10px;
  margin: 200px;
  width: 30% !important;
  background-color: white;
  position: unset;
  margin-left: 500px;
  padding: 2rem;
`;

const StyledLink = styled(Grid)`
  padding: 1rem;
  color: #55558f;
  :hover {
    text-decoration: underline;
    color: black;
  }
`;

export function SignIn(props: any) {
  const history = useHistory();

  const [openSignUp, setOpenSignUp] = React.useState<boolean>(props);
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [message, setMessage] = React.useState(null);
  const { setUser } = useContext(UserContext);

  const handleSignInForm = async (e: any) => {
    e.preventDefault();
    const userData = { email: email, password: password };

    AuthService.login(userData).then((data: any) => {
      const { isAuthenticated, token } = data;
      if (isAuthenticated) {
        setUser({ token: token });
        localStorage.setItem("auth-token", token);
        history.push("/home");
        props.onModalClose();
      } else {
        setMessage(message);
      }
    });
  };

  return (
    <Modal open={props.isSignUpOpen} onClose={() => props.onModalClose()}>
      {openSignUp ? (
        <Grid
          component="form"
          onSubmit={handleSignInForm}
          container
          justify="center"
          css={styledSignUpPage}
        >
          <TextField
            label="Email"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            color="primary"
            required
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            color="primary"
            required
          />

          <br />
          <div>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
          <StyledLink
            container
            justify="center"
            onClick={() => setOpenSignUp(!openSignUp)}
          >
            Create new account.
          </StyledLink>
        </Grid>
      ) : (
        <SignUp
          onSignUpModalOpen={() => {
            setOpenSignUp(!openSignUp);
          }}
        />
      )}
    </Modal>
  );
}
