
import React from 'react';
import { StyledBox } from './Stream';
import { TextField, Button } from '@material-ui/core';

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
                    <TextField onChange= {(e) => setInputPost(e.target.value)} label="Share with class" variant="filled"></TextField>
                    <div>
                        <Button onClick={()=> props.open()}>Cancel</Button>
                        <Button type = "submit">Post</Button>
                    </div>
                </form>
            </StyledBox>
        </React.Fragment>
    )
}