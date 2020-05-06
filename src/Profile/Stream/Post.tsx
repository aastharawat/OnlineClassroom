/** @jsx jsx */

import { StyledBox } from './Stream';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Grid, Divider } from '@material-ui/core';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

const StyledCommentBox = styled('input')`
    width: 90%;
    border-radius: 10px;
    height: 35px;
    border: 1px solid;
    border-color: #dedddd;
`
export const Post = (props: any) => {

    return(
        <div css = {css`padding-bottom: 20px`}>
            <StyledBox>
                <Grid container direction="row">
                    <AccountBoxIcon fontSize="large"/>
                    <div>Account name</div>
                </Grid>
                {props.post}
                <Divider/>
                <Grid css={css`margin: 10px`}>
                    <AccountBoxIcon fontSize="default"/>
                    <StyledCommentBox type="text" placeholder="add comments"></StyledCommentBox >
                </Grid>
            </StyledBox>
        </div>
    )   
}