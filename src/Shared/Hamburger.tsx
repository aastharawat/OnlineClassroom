/** @jsx jsx */

import MenuIcon from '@material-ui/icons/Menu';
import {css, jsx} from '@emotion/core';

export const Hamburger = (props: any) => {
    return(
        <div css={css`height: 100%; padding: 15px; color: #5f636; `}>
            <MenuIcon fontSize="large" onClick={props.onClick}></MenuIcon>  
        </div>
    )
}