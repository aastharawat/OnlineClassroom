/** @jsx jsx */

import { jsx} from '@emotion/core';
import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { styledCreateClassPopup, styledTextField } from './Popup.styled';

export interface IClass{
  name: string;
  section: string;
  subject: string;
  room: string;
}

export const CreateClassPopup = (props: any) =>{
  const[className, setClassName] = React.useState<string>()
  const[section, setSection] = React.useState<string>()
  const[subject, setSubject] = React.useState<string>()
  const[room, setRoom] = React.useState<string>()

  const newClass = {"className": className, "section":section, "subject":subject, "room": room}
  console.log(newClass, "props")

  const createClass = async (e: any) =>{
    await fetch("http://localhost:8000/course/classes", 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newClass)
    }).then((res) => res.json())
    .catch((err)=>console.log(err))
  }                    
  
    return (
            <Grid
            component="form"
            onSubmit={createClass}
            container
            justify="center"
            css={styledCreateClassPopup}
            >
    
            <TextField
            css = {styledTextField}
            label="Name"
            type="name"
            name="name"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={(e)=>{setClassName(e.target.value)}}
            color="primary"
            required
            />
            <TextField
            css = {styledTextField}
            label="Section"
            type="section"
            name="section"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={(e)=>{setSection(e.target.value)}}
            color="primary"
            required
            />

        <TextField
            css = {styledTextField}
            label="Subject"
            type="subject"
            name="subject"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={(e)=>{setSubject(e.target.value)}}
            color="primary"
            required
            />

        <TextField
            css = {styledTextField}
            label="Room"
            type="room"
            name="room"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={(e)=>{setRoom(e.target.value)}}
            color="primary"
            required
            />
    
            <br/>
            <div>
            <Button
            variant="contained" 
            color="primary"
            onClick={()=>props.open()}
            >
            Cancel
            </Button>

            <Button
            variant="contained" 
            color="primary"
            type="submit"
            >
            Submit
          </Button></div>
          </Grid>
    )
}

export default CreateClassPopup;
