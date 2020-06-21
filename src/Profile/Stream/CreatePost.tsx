
/** @jsx jsx */

import React from 'react';
import { StyledBox } from './Stream';
import { TextField, Button } from '@material-ui/core';
import { jsx, css } from '@emotion/core';

export const CreatePost = (props: any) => {
    const [inputPost, setInputPost] = React.useState<String>()

    const postMessage = (e: any) =>{
        props.open()
        props.posts(inputPost)
    }
    return(
        <React.Fragment>
            <StyledBox>
                <form onSubmit={postMessage}>
            
                    <TextField
                        id="outlined-textarea"
                        css={css`width:100%;`}
                        onChange= {(e) => setInputPost(e.target.value)}
                        label="Share with class"
                        multiline
                        variant="filled"
                        />
                    <div>
                        <Button onClick={()=> props.open()}>Cancel</Button>
                        <Button type = "submit">Post</Button>
                    </div>
                </form>
            </StyledBox>
        </React.Fragment>
    )
}