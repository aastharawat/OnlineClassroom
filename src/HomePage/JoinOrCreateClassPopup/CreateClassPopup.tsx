/** @jsx jsx */

import {css, jsx} from '@emotion/core';
import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { styledCreateClassPopup, styledPadding, styledInput } from './Popup.styled';

export interface IClass{
  name: string;
  section: string;
  subject: string;
  room: string;
}

export const CreateClassPopup = (props: any) =>{
  let [data] = React.useState<IClass>();
  data = {name:"React", section:"B", subject:"React", room: ""}

  const createClass = async (e: any) =>{
    console.log("aastha", e)
    e.preventDefault()

    await fetch("http://localhost:8000/course/classes", 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then((res)=>console.log("Success", res))
    console.log("done")
  }                    
  
  const StyledTextField = (props: any) =>{
    return(
    <div css={styledPadding}>
     <TextField label={props.label} variant="filled" css={styledInput}>Create Name(Required)<br></br></TextField>
    </div>
    )
  }

    return (
        <Grid css={styledCreateClassPopup}>
          <Grid css={css`padding: 20px`}>
            <div css={css`padding-bottom: inherit; font-family: sans-serif;`}>Create class</div>  
            <form onSubmit = {(e) => createClass(e)}>
            {StyledTextField({label: "Create Name(Required)"})}
            {StyledTextField({label: "Section"})}
            {StyledTextField({label: "Subject"})}
            {StyledTextField({label: "Room"})}
            <Grid>
            <Button>Cancel</Button>
            <Button type="submit">Apply</Button>
            </Grid>
            </form>
          </Grid>    
        </Grid>
      )
}  

export default CreateClassPopup;