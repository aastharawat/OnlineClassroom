/** @jsx jsx */

import React, { useContext } from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";
import UserContext from "../Context/authContext";

const StyledLabel = styled("div")`
  font-family: cursive;
  font-size: 30px;
  padding: 1rem;
`;

function HeaderName() {
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      {!user.token ? (
        <StyledLabel>Classroom</StyledLabel>
      ) : (
        <StyledLabel>{user.username}</StyledLabel>
      )}
    </React.Fragment>
  );
}

export default HeaderName;
