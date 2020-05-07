/** @jsx jsx */

import {css, jsx} from '@emotion/core';
import { Button, Grid, TextField } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';

const styledPopup = css`
border-radius: 10px ;
margin-top: 200px;
width: 40%;
background-color: white;
position: unset;
margin-left: 30%;
`

interface Class{
  name: string;
  section: string;
  subject: string;
  room: string;
}

export const CreateClassPopup = (props: any) =>{
    
  const createClass = (e: any) => {
    console.log("aastha")
    // const history = useHistory()

    // history.push("/profile")    

  }
    return (
        <Grid css={styledPopup}>
          <Grid css={css`padding: 20px`}>
            <div css={css`padding-bottom: inherit; font-family: sans-serif;`}>Create class</div>  
            <form onSubmit = {(e) => createClass(e)} css={css`width: 100%`}>
              <TextField label="Create Name(Required)" variant="filled">Create Name(Required)</TextField><br></br>
              <TextField label="Section" variant="filled">Section</TextField><br></br>
              <TextField label="Subject" variant="filled">Subject</TextField><br></br>
              <TextField label="Room" variant="filled">Room</TextField><br></br>
            <Grid>
            <Button>Cancel</Button>
            <Button type="submit" >Apply</Button>
            </Grid>
            </form>
          </Grid>    
        </Grid>
      )
}  

export default CreateClassPopup;