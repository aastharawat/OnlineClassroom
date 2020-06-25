/** @jsx jsx */

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Grid, Divider } from '@material-ui/core';
import { jsx, css } from '@emotion/core';
import { StyledBox, StyledCommentBox } from './stream.style';

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