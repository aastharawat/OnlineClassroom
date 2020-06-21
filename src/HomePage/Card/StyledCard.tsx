/** @jsx jsx */

import { styledCard, StyledLink, styledCardBottom, styledIcon } from "./Card.style"
import { jsx, css } from '@emotion/core';
import { Divider } from "@material-ui/core";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

export const StyledCard = (props: any)=>{
    return( 
        <StyledLink to={`/profile/5eaea333959eb86e48172e50`}>
        <div css={styledCard}>
            <div css={styledCardBottom}>{props.children}</div>
            <div css={css`padding-top: 160px;`} >
            <Divider/>
            <FolderOpenIcon css={styledIcon}></FolderOpenIcon>
            <TrendingUpIcon css={styledIcon}></TrendingUpIcon>
            </div>
        </div>  
        </StyledLink>

    )
}