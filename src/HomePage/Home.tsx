/** @jsx jsx */

import React from "react";
import { Grid, Modal } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AppsIcon from "@material-ui/icons/Apps";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { Menu, MenuItem } from "@material-ui/core";
import Popup from "./JoinOrCreateClassPopup/Popup";
import CreateClassPopupAgreement from "./JoinOrCreateClassPopup/CreateClassPopupAgreement";
import CreateClassPopup from "./JoinOrCreateClassPopup/CreateClassPopup";
import { styledIcon } from "./Card/Card.style";
import { SignIn } from "./Register/SignIn";
import { prependOnceListener } from "cluster";

const StyledHeaderIcons = styled(Grid)`
  display: flex;
  padding: 20px;
`;

const styleIcon = css`
  padding-left: 15px;
  color: #5f636;
  :hover {
    color: grey;
  }
`;

const listItemStyled = css`
  top: 25px !important;
  left: -95px !important;
`;
const StyledMenu = styled(MenuItem)`
  font-size: 0.89rem !important;
`;
const StyledLabel = styled("div")`
  font-family: cursive;
  font-size: 30px;
  width: 90%;
  @media all and (max-width: 1300px) {
    width: 80%;
  }
  @media all and (max-width: 800px) {
    width: 70%;
  }
`;

const StyledIcon = styled("div")`
  width: 10%;
  @media all and (max-width: 1300px) {
    width: 20%;
  }
  @media all and (max-width: 800px) {
    width: 30%;
  }
`;

function Home(props: any) {
  const [option, setOption] = React.useState(false);
  const [showJoinClass, setshowJoinClass] = React.useState(false);
  const [showCreateClass, setshowCreateClass] = React.useState(false);
  const [openCreatePopup, setOpenCreatePopup] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  const [anchorElAddIcon, setAnchorElAddIcon] = React.useState(null);
  const [openSignIn, setOpenSignIn] = React.useState(false);

  console.log(props.loggedInUser);
  const onClickAdd = (event: any) => {
    setOption(!option);
    setAnchorElAddIcon(event.currentTarget);
  };

  const JoinClass = () => {
    setshowJoinClass(!showJoinClass);
    setOption(false);
  };

  const CreateClass = () => {
    setshowCreateClass(!showCreateClass);
    setOption(false);
  };

  const OpenCreateClassPopup = () => {
    setshowCreateClass(!showCreateClass);
    setOpenCreatePopup(!openCreatePopup);
  };

  const profile = () => {
    setOpenProfile(!openProfile);
    setOpenCreatePopup(false);
  };

  const handleSignIn = () => {
    setOpenSignIn(!openSignIn);
  };
  return (
    <React.Fragment>
      <Grid>
        <StyledHeaderIcons container item direction="row">
          <StyledLabel>Classroom</StyledLabel>

          <StyledIcon>
            <AddIcon onClick={onClickAdd} css={styleIcon} />
            <Menu open={option} anchorEl={anchorElAddIcon} css={listItemStyled}>
              <StyledMenu onClick={JoinClass}>Join class</StyledMenu>
              <StyledMenu onClick={CreateClass}>Create class</StyledMenu>
            </Menu>

            <AppsIcon css={styleIcon}></AppsIcon>
            <AccountBoxIcon
              css={styleIcon}
              onClick={handleSignIn}
            ></AccountBoxIcon>
            {openSignIn && (
              <SignIn
                isSignUpOpen={openSignIn}
                onModalClose={() => {
                  setOpenSignIn(!openSignIn);
                }}
              />
            )}
          </StyledIcon>
        </StyledHeaderIcons>
        <Modal open={showJoinClass} onClose={JoinClass}>
          <Popup />
        </Modal>

        <Modal open={showCreateClass} onClose={CreateClass}>
          <CreateClassPopupAgreement createClass={OpenCreateClassPopup} />
        </Modal>
        <Modal
          open={openCreatePopup}
          onClose={() => {
            setOpenCreatePopup(!openCreatePopup);
          }}
        >
          <CreateClassPopup open={profile} />
        </Modal>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
