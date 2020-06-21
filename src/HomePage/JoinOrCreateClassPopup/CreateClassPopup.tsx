/** @jsx jsx */

import {css, jsx} from '@emotion/core';
import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import styled from '@emotion/styled';;

const styledPopup = css`
border-radius: 10px ;
margin-top: 200px;
width: 40%;
background-color: white;
position: unset;
margin-left: 30%;
`
const styledInput = styled(TextField)`
width: 90%;
padding: 10px;
`
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
    console.log("aastha")
    // const history = useHistory()
    // history.push("/profile") 
    
    await fetch("http://localhost:8000/course/classes", 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/jaon'},
      body: JSON.stringify(data)
    }).then((res)=>console.log("Success", res))
  }                     

    return (
        <Grid css={styledPopup}>
          <Grid css={css`padding: 20px`}>
            <div css={css`padding-bottom: inherit; font-family: sans-serif;`}>Create class</div>  
            <form onSubmit = {(e) => createClass(e)}>
              <TextField label="Create Name(Required)" variant="filled">Create Name(Required)</TextField><br></br>
              <TextField label="Section" variant="filled">Section</TextField><br></br>
              <TextField label="Subject" variant="filled">Subject</TextField><br></br>
              <TextField label="Room" variant="filled">Room</TextField><br></br>
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