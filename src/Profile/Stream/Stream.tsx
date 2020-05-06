/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import React from 'react'
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddIcon from '@material-ui/icons/Add';
import { CreatePost } from './CreatePost';
import { Post } from './Post';


const streamheader = css`
    background-image: url("https://gstatic.com/classroom/themes/img_kayaking.jpg");
    `

export const StyledBox = styled(Grid)`
    border-radius: 8px;
    border: 1px solid #e2dada;
    padding: 10px; 

`

export const Stream = ()  => {

    // const [value, setValue]           = React.useState([]);
    const [createPost, setCreatePost] = React.useState(false);
    const [inputPost, setinputPost] = React.useState<any>([]);

    console.log(createPost)
    console.log(inputPost)
    React.useEffect(() => {
        // fetchData();
      });

    //  const fetchData = async () => {
    //  console.log("Fetch")
    // const res = await (fetch('http://localhost:8000/course/list', {method: 'GET'}))
    // res.json()
    // .then(res => setValue(res));
    //  console.log("api return", value[0]);
    //  }
    return(
        <div css={css`width: 65%; padding-left: 15%;`}>
            <Grid>
                <div css={streamheader}>
                    <div>
                        <div>Couse Name</div>
                        <div>Section</div>
                        <div>Class Name</div>
                    </div>
                    <div css={css`padding-top:10%`}>
                        <div>Select photo</div> 
                        <div>Upload photo</div>
                    </div>
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