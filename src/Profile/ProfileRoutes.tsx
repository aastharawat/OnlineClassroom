/** @jsx jsx */

import React from 'react';
import {BrowserRouter, Route, Link, Switch, useParams } from 'react-router-dom';
import { Classwork } from './Classwork';
import { People } from './People';
import { Grades } from './Grades';
import { Grid } from '@material-ui/core';
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled';
import { Stream } from './Stream/Stream';

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
                <Switch>
                    <Route path="/profile/:id"><Stream/> </Route>
                    <Route path="/classwork"><Classwork/></Route>
                    <Route path="/people"><People/></Route>
                    <Route path="/Grades"><Grades/></Route>

                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Profile;