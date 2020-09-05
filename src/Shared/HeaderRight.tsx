/** @jsx jsx */

import React, { useContext } from "react";
import { Grid, Modal } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AppsIcon from "@material-ui/icons/Apps";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { Menu, MenuItem } from "@material-ui/core";
import Popup from "../Shared/JoinOrCreateClassPopup/Popup";
import CreateClassPopupAgreement from "../Shared/JoinOrCreateClassPopup/CreateClassPopupAgreement";
import CreateClassPopup from "../Shared/JoinOrCreateClassPopup/CreateClassPopup";
import LockIcon from "@material-ui/icons/Lock";
import { SignIn } from "../Shared/Register/SignIn";
import UserContext from "../Context/authContext";
import { useHistory } from "react-router-dom";

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

function HeaderRight(props: any) {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [option, setOption] = React.useState(false);
  const [showJoinClass, setshowJoinClass] = React.useState(false);
  const [showCreateClass, setshowCreateClass] = React.useState(false);
  const [openCreatePopup, setOpenCreatePopup] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  const [anchorElAddIcon, setAnchorElAddIcon] = React.useState(null);
  const [openSignIn, setOpenSignIn] = React.useState(false);
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

  const handleSignOut = () => {
    localStorage.clear();
    setUser({});
    history.push("/");
  };
  return (
    <React.Fragment>
      <StyledHeaderIcons>
        <Grid container direction="row">
          {user.token && <AddIcon onClick={onClickAdd} css={styleIcon} />}
          <Menu
            open={option}
            anchorEl={anchorElAddIcon}
            css={listItemStyled}
            onClose={() => {
              setOption(false);
            }}
          >
            <StyledMenu onClick={JoinClass}>Join class</StyledMenu>
            <StyledMenu onClick={CreateClass}>Create class</StyledMenu>
          </Menu>

          <AppsIcon css={styleIcon}></AppsIcon>
          {!user.token ? (
            <AccountBoxIcon
              css={styleIcon}
              onClick={handleSignIn}
            ></AccountBoxIcon>
          ) : (
            <LockIcon css={styleIcon} onClick={handleSignOut}></LockIcon>
          )}
          {openSignIn && (
            <SignIn
              isSignUpOpen={openSignIn}
              onModalClose={() => {
                setOpenSignIn(!openSignIn);
              }}
            />
          )}
        </Grid>
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
    </React.Fragment>
  );
}

export default HeaderRight;
