/** @jsx jsx */

import { jsx } from "@emotion/core";
import { Grid, Button, TextField } from "@material-ui/core";
import { styledPopup, StyledGrid } from "./Popup.styled";

export function Popup() {
  return (
    <Grid css={styledPopup}>
      <StyledGrid>
        <p>Join class</p>
        <p>Ask your teacher for the class code, then enter it here.</p>
        <TextField label="Class code" variant="filled">
          Section
        </TextField>

        <Grid container direction="row" alignContent="flex-end">
          <Button>Cancel</Button>
          <Button>Save</Button>
        </Grid>
      </StyledGrid>
    </Grid>
  );
}

export default Popup;
