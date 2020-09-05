/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { CreatePost } from "./CreatePost";
import { Post } from "./Post";
import { IClassDetail } from "../../Interfaces/ClassDetail";
import { useParams } from "react-router-dom";
import UserContext from "../../Context/authContext";
import {
  streamheader,
  StyledLink,
  StyledBox,
  StyledText,
  StyledCommunicateBox,
} from "./stream.style";
import authService from "../../services/authService";

export const Stream = (props: any) => {
  let { id } = useParams();
  const { user } = useContext(UserContext);
  const [value, setValue] = React.useState<IClassDetail>();
  const [createPost, setCreatePost] = React.useState(false);
  const [inputPost, setinputPost] = React.useState<any>([]);

  React.useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    await authService.getClassById(user.token, id).then((res) => {
      setValue(res.classes[0]);
    });
  };
  return (
    <div
      css={css`
        width: 65%;
        padding-left: 15%;
        padding-top: 3%;
      `}
    >
      {value ? (
        <div>
          <Grid>
            <div css={streamheader}>
              <span>
                <div>{value.className}</div>
                <div>{value.section}</div>
                <div>{value.subject}</div>
              </span>

              <StyledLink>Select theme</StyledLink>
              <StyledLink>Upload Photo</StyledLink>
            </div>
          </Grid>
          <Grid
            container
            direction="row"
            css={css`
              padding-top: 3%;
            `}
          >
            <Grid xs={3}>
              <StyledBox
                css={css`
                  height: 100px;
                  width: 200px;
                `}
              >
                Upcoming
              </StyledBox>
            </Grid>
            <Grid xs={9}>
              <Grid
                css={css`
                  padding-left: 20px;
                `}
              >
                <Grid
                  css={css`
                    padding-bottom: 20px;
                  `}
                >
                  {createPost ? (
                    <CreatePost
                      open={() => setCreatePost(!createPost)}
                      posts={(post: any) => setinputPost([...inputPost, post])}
                    />
                  ) : (
                    <StyledBox
                      container
                      direction="row"
                      css={css`
                        box-shadow: 1px 2px #dedede;
                      `}
                    >
                      <Grid
                        xs={11}
                        container
                        direction="row"
                        onClick={() => setCreatePost(!createPost)}
                      >
                        <AccountBoxIcon fontSize="large"></AccountBoxIcon>
                        <StyledText>
                          Say something with your class...
                        </StyledText>
                      </Grid>
                    </StyledBox>
                  )}
                </Grid>
                <Grid>
                  {!inputPost.length ? (
                    <StyledBox
                      css={css`
                        height: 10%;
                      `}
                    >
                      <StyledCommunicateBox
                        css={css`
                          font-size: 1.5rem;
                          color: #1967d2;
                        `}
                      >
                        Communicate with your class here
                      </StyledCommunicateBox>
                      <StyledCommunicateBox>
                        Create and schedule announcements
                      </StyledCommunicateBox>
                      <StyledCommunicateBox>
                        Respond to student posts
                      </StyledCommunicateBox>
                    </StyledBox>
                  ) : (
                    inputPost.map((post: any) => <Post post={post}></Post>)
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>No data </div>
      )}
    </div>
  );
};
