/** @jsx jsx */

import React from 'react';
import { Hamburger } from '../Shared/Hamburger';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Stream } from './Stream';
import { Classwork } from './Classwork';
import { People } from './People';
import { Grades } from './Grades';
import { Grid } from '@material-ui/core';
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled';

const ProfilePagesLink = css`

`
const Header = styled('div')`
height: 4rem;
background-color: #f8f8f8;
`

const StyledLinks = styled(Link)`
padding: .125rem 1.5rem 0 1.5rem;
text-decoration: none;
coloe: rgb(211,211,211);

:hover{
    background-color: rgb(220,220,220);
    color: black;
}
`

export const Profile = () => {
    return(
        <React.Fragment>
            <BrowserRouter>
            <Header>
            <Grid container direction="row">
                <Grid xs={4}><Hamburger></Hamburger></Grid>  
                <Grid xs={4}container css={ProfilePagesLink} direction="row">
                    <StyledLinks to="/stream">Stream</StyledLinks>
                    <StyledLinks to="/classwork" >Classwork</StyledLinks>
                    <StyledLinks to="/people">People</StyledLinks>
                    <StyledLinks to="/grades">Grades</StyledLinks>
                </Grid>
                </Grid>
           </Header>
            <Switch>
            <Route path="/stream" ><Stream/></Route>
            <Route path="/classwork" ><Classwork/></Route>
            <Route path="/people" ><People/></Route>
            <Route path="/Grades"><Grades/></Route>
            {/* <Redirect to = "/stream"></Redirect>> */}
            </Switch>

            </BrowserRouter>
            {/* <Redirect to="/classwork"><div>Aastha</div></Redirect> */}
        </React.Fragment>
    )
}

export default Profile;