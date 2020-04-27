/** @jsx jsx */

import React from 'react';
import {Grid, Modal} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import styled  from '@emotion/styled'
import {css, jsx} from '@emotion/core';
import {Menu,  MenuItem } from '@material-ui/core';
import Popup from './JoinOrCreateClassPopup/Popup';
import CreateClassPopupAgreement from './JoinOrCreateClassPopup/CreateClassPopupAgreement';
import CreateClassPopup from './JoinOrCreateClassPopup/CreateClassPopup';
import { Hamburger } from '../Shared/Hamburger';


const Header = styled('div')`
height: 4rem;
background-color: #f8f8f8;
`

const StyledHeaderIcons = styled(Grid)`
display: flex;
padding: 20px;
`

const styleIcon = css`
padding-left: 13px;
:hover{
  color: grey;
}
`
const styledLabel = css`
font-family: cursive;
font-size: 30px;
padding-left: 10px;
`


const listItemStyled = css`
top: 25px !important;
left: -95px !important;
`
const ss = css`
font-size: 0.89rem !important;
`
function Home() {

  const [option, setOption] = React.useState(false);
  const [showJoinClass, setshowJoinClass] = React.useState(false);
  const [showCreateClass, setshowCreateClass] = React.useState(false);
  const [openCreatePopup, setOpenCreatePopup] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const onClickAdd = (event: any) =>{
    setOption(!option);
    setAnchorEl(event.currentTarget)
  }

  const JoinClass = () => {
    setshowJoinClass(!showJoinClass)
    setOption(false)
 }

 const CreateClass = () => {
  setshowCreateClass(!showCreateClass);
  setOption(false)

 }

 const OpenCreateClassPopup = () => {
   setshowCreateClass(!showCreateClass);
   setOpenCreatePopup(!openCreatePopup);
 }

 const profile = () =>{
  setOpenProfile(!openProfile)
  setOpenCreatePopup(false)
 }

  return (
   <React.Fragment>
     <Header>
       <StyledHeaderIcons container item xs={12} direction='row'>
        <Grid xs={11} container>
          <Hamburger></Hamburger>
         <div css={styledLabel}>Classroom</div>
        </Grid>

        <Grid container item direction="row" xs={1} >
         <Grid css={styleIcon} onClick={onClickAdd}>
           <AddIcon ></AddIcon>
           
         </Grid>
         <Menu open={option} anchorEl={anchorEl} css={listItemStyled}>
           <MenuItem css={ss} onClick={JoinClass}>Join class</MenuItem>
           <MenuItem css={ss} onClick={CreateClass}>Create class</MenuItem>
         </Menu>

         <Grid css={styleIcon} ><AppsIcon ></AppsIcon></Grid>
         <Grid css={styleIcon}><AccountBoxIcon ></AccountBoxIcon></Grid>
        </Grid>
        </StyledHeaderIcons>
     </Header>
     <Modal open={showJoinClass} onClose={JoinClass}><Popup/></Modal>

      <Modal open={showCreateClass} onClose ={CreateClass}>
        <CreateClassPopupAgreement createClass={OpenCreateClassPopup} />
      </Modal>
      <Modal open={openCreatePopup} onClose={() => {setOpenCreatePopup(!openCreatePopup)}}><CreateClassPopup open = {profile}/></Modal>
    
   </React.Fragment>
  );
}

export default Home;
