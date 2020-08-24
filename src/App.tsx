/** @jsx jsx */

import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import { SideDrawer } from "./Shared/SideDrawer";
import { Hamburger } from "./Shared/Hamburger";
import { Grid, Modal } from "@material-ui/core";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import LoaderDesign from "./Shared/Loader";
import { ClassCard } from "./HomePage/Card/ClassCard";
import UserContext from "./Context/authContext";
import authService from "./services/authService";
const Profile = React.lazy(() => import("./Profile/ProfileRoutes"));

export const Header = styled(Grid)`
  width: 100%;
  height: 4rem;
  background-color: #f8f8f8;
`;

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    token: null as any,
    email: undefined,
    username: undefined,
  });

  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    authService.isTokenValid(token).then((res) => {
      setUser({ token: token, email: res.email, username: res.username });
    });

  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Modal
            closeAfterTransition
            open={isOpen}
            onClose={() => setIsOpen(!isOpen)}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <SideDrawer />
          </Modal>
          <Header container item direction="row">
            <Grid
              css={css`
                width: 4%;
              `}
            >
              <Hamburger onClick={() => setIsOpen(!isOpen)}></Hamburger>
            </Grid>
            <Grid
              css={css`
                width: 96%;
              `}
            >
              <Home />
            </Grid>
          </Header>

          <Suspense fallback={<LoaderDesign />}>
            <Route path="/home">
              <ClassCard />
            </Route>
            <Route path="/profile/:id">
              <Profile />
            </Route>
          </Suspense>
        </UserContext.Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
