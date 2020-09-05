/** @jsx jsx */

import {jsx} from '@emotion/core';
import {Grid, Checkbox, Button} from '@material-ui/core';
import React from 'react';
import { styledClassPopupAgreement, styledPopupOutAgreement, styledInnerPopup } from './Popup.styled';

export const CreateClassPopupAgreement = (props: any) =>{
    const [open, setOpen] = React.useState(true);
    const [agree, setAgree] = React.useState(true)
    const openCreateClassPopup = () =>{
        setOpen(!open)
        props.createClass(!open)
    }

    return (
        <div css={styledClassPopupAgreement}>
            <Grid css={styledPopupOutAgreement}>

            <div css={styledInnerPopup}>Using Classroom at a school with students?</div>
            <div css={styledInnerPopup}>If so, your school must sign up for a free G Suite for Education account before you can use Classroom. Learn More

            G Suite for Education lets schools decide which Google services their students can use, and provides additional privacy and security
            protections that are important in a school setting. Students cannot use Google Classroom at a school with personal accounts.</div>
            <Grid css={styledInnerPopup}>
                <Grid>
                    <Checkbox color="primary" onChange={() => setAgree(!agree)}/>
                    I agree to all the policies
                </Grid>
            </Grid>
            <Button disabled={agree} onClick={openCreateClassPopup}>Continue</Button>
            </Grid>   
        </div>
      )
}
   
export default CreateClassPopupAgreement;                                                                                               