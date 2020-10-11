/** @jsx jsx */

import { Link, useParams } from "react-router-dom";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const StyledLinks = styled(Link)`
  height: 100%;
  text-decoration: none;
  color: rgb(109, 109, 109);
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  :hover {
    color: black;
    border-bottom-style: solid;
    border-radius: 0 0 0.25rem 0.25rem;
    border-color: black;
    background: #f1eded;
  }
  @media (max-width: 800px) {
    padding: 0.1rem 1rem 0 1rem;
  }
`;

const StyledProfileHeader = styled(`div`)`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  :hover {
  }
  @media (max-width: 800px) {
  }
`;

export const Profile = () => {
  const { id } = useParams();
  console.log("id", id);

  return (
    <StyledProfileHeader>
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
    </StyledProfileHeader>
  );
};

export default Profile;
