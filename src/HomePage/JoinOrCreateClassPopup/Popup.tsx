/** @jsx jsx */

import {jsx} from '@emotion/core';
import {Grid, Button, TextField} from '@material-ui/core';
import { styledPopup, styledPopupOut } from './Popup.styled';

export function Popup(){
    console.log("popup")
    return (
        <Grid css={styledPopup}>
          <Grid css={styledPopupOut}>
          <div >Join class</div><br></br>
          <div >Ask your teacher for the class code, then enter it here.</div><br></br>
          <TextField label="Class code" variant="filled" >Section</TextField>

          <Grid container direction="row" alignContent="flex-end" >
            <Button>Cancel</Button>
            <Button>Save</Button>
          </Grid>
          </Grid>    
        </Grid>
      )
}

export default Popup;