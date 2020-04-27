/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import React from 'react'


const streamheader = css`
    background-image: url("https://gstatic.com/classroom/themes/img_kayaking.jpg");
    `
export const Stream = () => {
    const [value, setValues] = React.useState();
    React.useEffect(()=> {
        fetch('http://localhost:8000/course/list').then(res=> res.json()).then(json=>setValues(json));
    })
    console.log("api return", value);
    return(
    <div css={css`width: 50%; padding-left: 25%;`}>
        <div css={streamheader}>
            <div>Course Name</div>
            <div>Section</div>
            <div>Class Name</div>
        </div>
    </div>
    )   
}