import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Grid from '@material-ui/core/Grid'

export const StyledCommentBox = styled('input')`
    width: 90%;
    border-radius: 10px;
    height: 35px;
    border: 1px solid;
    border-color: #dedddd;
`
export const streamheader = css`
    background-image: url("https://gstatic.com/classroom/themes/img_kayaking.jpg");
    padding:30px;
    color: white;
    height: 200px;
    border-radius: 10px;
`

export const StyledBox = styled(Grid)`
    border-radius: 8px;
    border: 1px solid #e2dada;
    padding: 1rem; 

`
export const StyledLink = styled('div')`
text-decoration: none;
color: white;
text-align: end;
bottom: -100px;
position: relative;
:hover {
    text-decoration: underline;
    }
`
export const StyledText = styled('div')`
font-family: initial;
color: #a9a0a0;
padding: 10px;
:hover {
    color: #315c98;
}
`
export const StyledCommunicateBox = styled('div')`
letter-spacing: .01785714em;
font-family: 'Google Sans',Roboto,Arial,sans-serif;
font-size: 0.875rem;
font-weight: 500;
line-height: 1.25rem;
color: #3c4043;
padding: 5px;
`