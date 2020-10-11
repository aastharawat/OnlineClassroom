/** @jsx jsx */

import React, { Suspense, useState, useEffect, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Hamburger } from "./Shared/Hamburger";
import { Grid } from "@material-ui/core";
import { jsx } from "@emotion/core";
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
export const Header = styled(`div`)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  @media (max-width: 800px) {
    flex-direction: column;
  }
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
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Header>
          <Hamburger />
          <div>
            {user.token && (
              <Suspense fallback={<LoaderDesign />}>
                <Route path="/profile/:id">
                  <Profile />
                </Route>
              </Suspense>
            )}
          </div>
          <HeaderRight />
        </Header>
        {user.token && (
          <Grid>
            <Suspense fallback={<LoaderDesign />}>
              <Route path="/" exact>
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
  );
}

export default App;
