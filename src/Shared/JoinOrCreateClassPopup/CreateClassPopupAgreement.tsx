/** @jsx jsx */

import { jsx } from "@emotion/core";
import { Grid, Checkbox, Button } from "@material-ui/core";
import React from "react";
import { StyledGrid, styledClassPopupAgreement } from "./Popup.styled";

export const CreateClassPopupAgreement = (props: any) => {
  const [open, setOpen] = React.useState(true);
  const [agree, setAgree] = React.useState(true);
  const openCreateClassPopup = () => {
    setOpen(!open);
    props.createClass(!open);
  };

  return (
    <div css={styledClassPopupAgreement}>
      <StyledGrid>
        <p>Using Classroom at a school with students?</p>
        <p>
          If so, your school must sign up for a free G Suite for Education
          account before you can use Classroom. Learn More G Suite for Education
          lets schools decide which Google services their students can use, and
          provides additional privacy and security protections that are
          important in a school setting. Students cannot use Google Classroom at
          a school with personal accounts.
        </p>
        <p>
          <Grid>
            <Checkbox color="primary" onChange={() => setAgree(!agree)} />I
            agree to all the policies
          </Grid>
        </p>
        <Button disabled={agree} onClick={openCreateClassPopup}>
          Continue
        </Button>
      </StyledGrid>
    </div>
  );
};

export default CreateClassPopupAgreement;
