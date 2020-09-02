/** @jsx jsx */

import React, { Suspense, useState, useEffect, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderName from "./HomePage/Home";
import { Hamburger } from "./Shared/Hamburger";
import { Grid, Hidden } from "@material-ui/core";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import LoaderDesign from "./Shared/Loader";
import { ClassCard } from "./HomePage/Card/ClassCard";
import UserContext from "./Context/authContext";
import authService from "./services/authService";
import HeaderRight from "./Shared/HeaderRight";
const Profile = React.lazy(() => import("./Profile/ProfileRoutes"));
const Stream = lazy(() =>
  import("./Profile/Stream/Stream").then(({ Stream }) => ({ default: Stream }))
);

const People = lazy(() =>
  import("./Profile/People").then(({ People }) => ({ default: People }))
);
const Grades = lazy(() =>
  import("./Profile/Grades").then(({ Grades }) => ({ default: Grades }))
);
const Classwork = lazy(() =>
  import("./Profile/Classwork").then(({ Classwork }) => ({
    default: Classwork,
  }))
);
export const Header = styled(Grid)`
  width: 100%;
  height: 4rem;
  background-color: #f8f8f8;
`;

export function App() {
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
          <Header css={css``} container direction="row">
            <Grid item xs={1} sm={2} container direction="row">
              <Hamburger />
              <Hidden only={["xs", "sm"]}>
                <HeaderName />
              </Hidden>
            </Grid>
            <Grid item xs={8}>
              {user.token && (
                <Suspense fallback={<LoaderDesign />}>
                  <Route path="/profile/:id">
                    <Profile />
                  </Route>
                </Suspense>
              )}
            </Grid>
            <Grid>
              <HeaderRight />
            </Grid>
          </Header>
          {user.token && (
            <Grid>
              <Suspense fallback={<LoaderDesign />}>
                <Route path="/home" exact>
                  <ClassCard />
                </Route>
                <Switch>
                  <Route path="/profile/:id" exact>
                    <Stream />
                  </Route>
                  <Route path="/profile/:id/classwork">
                    <Classwork />
                  </Route>
                  <Route path="/profile/:id/people">
                    <People />
                  </Route>
                  <Route path="/profile/:id/Grades">
                    <Grades />
                  </Route>
                </Switch>
              </Suspense>
            </Grid>
          )}
        </UserContext.Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
