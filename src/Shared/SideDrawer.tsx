/** @jsx jsx */

import { Grid, Divider } from '@material-ui/core'
import {css, jsx} from '@emotion/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { IClassDetail } from '../Interfaces/ClassDetail';
import styled from '@emotion/styled';

const styledSideDrawer =  css`
background: #f5f5f5;
height: 100%;
width: 300px;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden; 
transition: 0.5s;
padding-top: 60px;

`
const styledClasses = css`
padding: 20px;
:hover {
  color: grey;
  background:  rgb(211,211,211);
}
`

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
font-size: 20px;
`

export const SideDrawer = () => {
    let [value, setValue] = React.useState<IClassDetail[]>([]);

    React.useEffect(() => {
        fetchData()
      }, []);


      const fetchData = async ()=> {
        const res = await fetch('http://localhost:8000/course/list', {method: 'GET'});
        const resData = await res.json();
        setValue(resData)
      }


    return(
        <React.Fragment>
                <Grid css={styledSideDrawer}>
                <StyledLink to="/" css={css`padding: 20px;`}>Classes</StyledLink>
                <Divider/>
                {value.map((item)=>(
                
                <StyledLink to={`/profile/${item._id}`}>
                  <div css={styledClasses}>{item.className}</div>
                </StyledLink>
                ))}
                </Grid>
            <Divider/>

        </React.Fragment>

    )
}   