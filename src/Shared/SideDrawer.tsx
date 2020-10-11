/** @jsx jsx */

import { Grid, Divider } from "@material-ui/core";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { IClassDetail } from "../Interfaces/ClassDetail";
import styled from "@emotion/styled";
import authService from "../services/authService";
import UserContext from "../Context/authContext";

const styledSideDrawer = css`
  background: #f5f5f5;
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;
const styledClasses = css`
  padding: 20px;
  :hover {
    color: grey;
    background: rgb(211, 211, 211);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

export const SideDrawer = () => {
  let [value, setValue] = React.useState<IClassDetail[]>([]);
  const { user } = useContext(UserContext);

  React.useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    authService.getClasses(user.token).then((res) => {
      setValue(res.classes);
    });
  };

  return (
    <React.Fragment>
      <Grid css={styledSideDrawer}>
        <StyledLink
          to="/"
          css={css`
            padding: 20px;
          `}
        >
          Classes
        </StyledLink>
        <Divider />
        {value &&
          value.map((item) => (
            <StyledLink to={`/profile/${item._id}`}>
              <div css={styledClasses}>{item.className}</div>
            </StyledLink>
          ))}
      </Grid>
      <Divider />
    </React.Fragment>
  );
};
