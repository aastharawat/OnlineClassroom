/** @jsx jsx */

import React from "react";
import { Link, useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const StyledLinks = styled(Link)`
  text-decoration: none;
  color: rgb(109, 109, 109);
  padding: 1rem 1.5rem 0 1.5rem;
  :hover {
    color: black;
    border-bottom-style: solid;
    border-radius: 0 0 0.25rem 0.25rem;
    border-color: black;
    background: #f1eded;
  }
`;

export const Profile = () => {
  const { id } = useParams();
  console.log("id", id);

  return (
    <React.Fragment>
      <Grid
        css={css`
          padding-left: 32%;
          height: 65px;
        `}
        container
        direction="row"
      >
        <StyledLinks to={`/profile/${id}`} id="stream">
          Stream
        </StyledLinks>
        <StyledLinks to={`/profile/${id}/classwork`} id="classwork">
          Classwork
        </StyledLinks>
        <StyledLinks to={`/profile/${id}/people `} id="people">
          People
        </StyledLinks>
        <StyledLinks to={`/profile/${id}/grades`} id="grades">
          Grades
        </StyledLinks>
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
