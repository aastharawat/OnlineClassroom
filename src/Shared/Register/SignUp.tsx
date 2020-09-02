/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { Grid, Button, TextField } from "@material-ui/core";
import React from "react";
import authService from "../../services/authService";

const styledSignUpPage = css`
  border-radius: 10px;
  margin: 200px;
  width: 30% !important;
  background-color: white;
  position: unset;
  margin-left: 500px;
  padding: 2rem;
`;

export function SignUp(props: any) {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();
  const [userName, setUserName] = React.useState<string>();

  const createUserData = {
    email: email,
    password: password,
    passwordCheck: confirmPassword,
    userName: userName,
  };

  const handleSignUpForm = async () => {
    authService.register(createUserData);
  };

  return (
    <Grid
      component="form"
      onSubmit={handleSignUpForm}
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

      <TextField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        color="primary"
        required
      />

      <TextField
        label="UserName"
        type="text"
        name="username"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={(e) => setUserName(e.target.value)}
        color="primary"
      />

      <br />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Grid>
  );
}
