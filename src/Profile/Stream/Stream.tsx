/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import React from 'react'
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddIcon from '@material-ui/icons/Add';
import { CreatePost } from './CreatePost';
import { Post } from './Post';
import { IClass } from '../../HomePage/JoinOrCreateClassPopup/CreateClassPopup';
import { IClassDetail } from '../../Interfaces/ClassDetail';
import { useLocation, useParams } from 'react-router-dom';


const streamheader = css`
    background-image: url("https://gstatic.com/classroom/themes/img_kayaking.jpg");
    padding:30px;
    color: white;
    height: 200px;
    border-radius: 10px;
`

export const StyledBox = styled(Grid)`
    border-radius: 8px;
    border: 1px solid #e2dada;
    padding: 10px; 

`
export const StyledLink = styled('div')`
text-decoration: none;
color: white;
text-align: end;
bottom: -100px;
position: relative;
:hover {
    text-decoration: underline;
    }
`
export const Stream = (props: any)  => {
    let id = useParams();
    console.log("sushila stream s", id)
    const [value, setValue] = React.useState<IClassDetail>();
    const [createPost, setCreatePost] = React.useState(false);
    const [inputPost, setinputPost] = React.useState<any>([]);

    React.useEffect(() => {
        fetchData();
      });

     const fetchData = async () => {
    //  console.log("Fetch", value)
    const res = await (fetch(`http://localhost:8000/course/list/${id}`, {method: 'GET'}))
    res.json()
    .then(res => setValue(res));
     }


  let [data] = React.useState<IClass>();
  data = {name:"React", section:"B", subject:"React", room: ""}


    return(
        <div css={css`width: 65%; padding-left: 15%; padding-top:3%`}>
            <Grid>
                <div css={streamheader}>
                    <div>{value?.className}</div>
                    <div>{value?.section}</div>
                    <div>{value?.subject}</div>
                    <StyledLink>Select theme</StyledLink>
                    <StyledLink>Upload Photo</StyledLink>
                </div>
            </Grid>
            <Grid container direction="row" css = {css`padding-top: 3%;`}>
                <Grid xs={3}><StyledBox css={css`height: 100px; width: 200px;`}>Upcoming</StyledBox></Grid>
                <Grid xs={9}>
                    <Grid css={css`padding-left: 20px`}>
                    <Grid css = {css`padding-bottom: 20px`}>
                    {createPost? <CreatePost open={() => setCreatePost(!createPost)} posts = {(post: any) => setinputPost([...inputPost,post])}/>: 

                        <StyledBox container direction="row" css={css` box-shadow: 1px 2px #dedede`}>
                            <Grid xs={11} container direction="row" onClick={() => setCreatePost(!createPost)}>
                                <AccountBoxIcon fontSize="large"></AccountBoxIcon>
                                <div>Say something with your class...</div>
                            </Grid>
                        
                            <Grid><AddIcon></AddIcon></Grid>
                        </StyledBox>
                    }
                    </Grid>
                    <Grid >
                    {!inputPost.length? 
                      <StyledBox css={css`height:100px`}>
                        <div>Communicate with your class here</div>
                        <div>Create and schedule announcements</div>
                        <div>Respond to student posts</div>
                     </StyledBox>
                    :
                        inputPost.map((post: any)=> (<Post post = {post}></Post>))
                        }
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </div>
    )   
}