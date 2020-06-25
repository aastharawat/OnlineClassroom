/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import React from 'react'
import { Grid } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddIcon from '@material-ui/icons/Add';
import { CreatePost } from './CreatePost';
import { Post } from './Post';
import { IClassDetail } from '../../Interfaces/ClassDetail';
import { useParams } from 'react-router-dom';
import LoaderDesign from '../../Shared/Loader';
import { streamheader, StyledLink, StyledBox } from './stream.style';

export const Stream = (props: any)  => {
    let {id} = useParams();

    const [value, setValue] = React.useState<IClassDetail>();
    const [createPost, setCreatePost] = React.useState(false);
    const [inputPost, setinputPost] = React.useState<any>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetchData()
      }, []);

     const fetchData = async () => {
        const url = `http://localhost:8000/course/list/${id}`
        const res = await fetch(url, {method: 'GET'});
        await res.json().then(res=> {setValue(res)});
        setIsLoading(false)
     }

    return(
        <div>
            <div css={css`width: 65%; padding-left: 15%; padding-top:3%`}>
            {isLoading && <LoaderDesign/>}
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
    </div>
    )   
}