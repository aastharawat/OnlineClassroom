/** @jsx jsx */

import React, { Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import { SideDrawer } from './Shared/SideDrawer';
import { Hamburger } from './Shared/Hamburger';
import { Grid, Modal } from '@material-ui/core';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import LoaderDesign from './Shared/Loader';
const Profile = React.lazy(() => import('./Profile/ProfileRoutes'));

export const Header = styled(Grid)`
width: 100%;
height: 4rem;
background-color: #f8f8f8;
`

export function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
   <React.Fragment>
     <BrowserRouter>
     <Modal closeAfterTransition open={isOpen} onClose={() => setIsOpen(!isOpen)} onClick={()=>{setIsOpen(false)}}>
       <SideDrawer/>
      </Modal>
       <Header container item direction="row">
         <Grid css={css`width:4%`}><Hamburger onClick={()=>setIsOpen(!isOpen)}></Hamburger></Grid>
          <Grid css={css`width:96%`}>
          <Suspense fallback={<LoaderDesign/>}>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/profile/:id">
            <Profile/>
          </Route>
          </Suspense>
          </Grid>
       </Header>
      </BrowserRouter>
   </React.Fragment>
  );
}

export default App;