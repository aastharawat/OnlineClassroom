/** @jsx jsx */

import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Route, Link, Switch, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled';
import { LoaderDesign } from '../Shared/Loader';

const Stream = lazy(() =>
import('./Stream/Stream')
    .then(({ Stream }) => ({ default: Stream })),
);

const People = lazy(() =>
import('./People')
    .then(({ People }) => ({ default: People })),
);
const Grades = lazy(() =>
import('./Grades')
    .then(({ Grades }) => ({ default: Grades })),
);
const Classwork = lazy(() =>
import('./Classwork')
    .then(({ Classwork }) => ({ default: Classwork })),
);
const StyledLinks = styled(Link)`
text-decoration: none;
color: rgb(109, 109, 109);
padding: 1rem 1.5rem 0 1.5rem;
:hover{
    color: black;
    border-bottom-style: solid;
    border-radius: 0 0 0.25rem 0.25rem ;
    border-color: black;
    background:  #f1eded;
    }
`

export const Profile = () => {

    const {id} = useParams();
    return(
        <React.Fragment>
            <BrowserRouter>
                <Grid css={css`padding-left: 32%; height: 65px;`} container direction="row">
                    <StyledLinks 
                    to={`/profile/${id}`} 
                    id = "stream" 
                    > 
                     Stream</StyledLinks>
                    <StyledLinks 
                    to="/classwork" 
                    id = "classwork">
                    Classwork</StyledLinks>
                    <StyledLinks 
                    to="/people" 
                    id = "people">
                    People</StyledLinks>
                    <StyledLinks 
                    to="/grades" 
                    id = "grades">
                    Grades</StyledLinks>
                </Grid>
                <Suspense fallback={<div><LoaderDesign/></div>}>
                <Switch>
                    <Route path="/profile/:id"><Stream/> </Route>
                    <Route path="/classwork"><Classwork/></Route>
                    <Route path="/people"><People/></Route>
                    <Route path="/Grades"><Grades/></Route>
                </Switch>
                </Suspense>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Profile;