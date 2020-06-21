/** @jsx jsx */

import React from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import Profile from './Profile/ProfileRoutes';
import { SideDrawer } from './Shared/SideDrawer';
import { Hamburger } from './Shared/Hamburger';
import { Grid, Modal } from '@material-ui/core';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

export const Header = styled(Grid)`
width: 100%;
height: 4rem;
background-color: #f8f8f8;
`

export function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  // let query = new URLSearchParams(useLocation().search);
  return (
   <React.Fragment>
     <BrowserRouter>
     <Modal closeAfterTransition open={isOpen} onClose={() => setIsOpen(!isOpen)} onClick={()=>{setIsOpen(false)}}>
       <SideDrawer/>
         </Modal>
       <Header container item direction="row" >
         <Grid css={css`width:4%`}><Hamburger onClick={()=>setIsOpen(!isOpen)}></Hamburger></Grid>
          <Grid css={css`width:96%`}>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/profile/:id" >
            <Profile/>
            </Route>
          </Grid>
       </Header>
      </BrowserRouter>
   </React.Fragment>
  );
}

export default App;