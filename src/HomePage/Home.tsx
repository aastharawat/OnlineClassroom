/** @jsx jsx */

import React, { useContext } from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";
import UserContext from "../Context/authContext";

const StyledLabel = styled("div")`
  position: absolute;
  font-family: cursive;
  font-size: 20px;
`;

function HeaderName() {
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      {!user.token ? (
        <StyledLabel>Classroom</StyledLabel>
      ) : (
        <StyledLabel>{user.email}</StyledLabel>
      )}
    </React.Fragment>
  );
}

export default HeaderName;
