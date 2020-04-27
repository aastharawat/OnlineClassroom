/** @jsx jsx */

import {css, jsx} from '@emotion/core';
import {Grid, Checkbox, Button} from '@material-ui/core';
import React from 'react';

const styledPopup = css`
border-radius: 10px ;
margin-top: 200px;
width: 23%;
background-color: white;
position: unset;
margin-left: 580px;
`
const styledPopupOut = css`
margin: 20px;
`
const styledInnerPopup = css`
padding-top: 20px;
`
export const CreateClassPopupAgreement = (props: any) =>{
    console.log("popup")
    const [open, setOpen] = React.useState(true);
    const openCreateClassPopup = () =>{
        setOpen(!open)
        props.createClass(!open)
    }

    return (
        <div css={styledPopup}>
            <Grid css={styledPopupOut}>

            <div css={styledInnerPopup}>Using Classroom at a school with students?</div>
            <div css={styledInnerPopup}>If so, your school must sign up for a free G Suite for Education account before you can use Classroom. Learn More

            G Suite for Education lets schools decide which Google services their students can use, and provides additional privacy and security
            protections that are important in a school setting. Students cannot use Google Classroom at a school with personal accounts.</div>
            <Grid css={styledInnerPopup}>
                <Checkbox></Checkbox>
            </Grid>
            <Button onClick={openCreateClassPopup}>Continue</Button>

            </Grid>   
        </div>
      )
}
   
export default CreateClassPopupAgreement;                                                                                               