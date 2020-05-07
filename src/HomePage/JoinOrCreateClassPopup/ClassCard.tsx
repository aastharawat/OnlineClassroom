/** @jsx jsx */

import React from 'react';
import { Grid } from '@material-ui/core';
import { IClassDetail } from '../../Profile/Stream/Stream';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

const StyledCard = styled(Grid)`
    padding: 10px;
    width: 250px;
    height: 250px;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
    :hover{
        box-shadow: 2px 2px #e9e9e9;
    }
`
export const ClassCard = () => {
    React.useEffect(() => {
        fetchData();
      });
    const [value, setValue] = React.useState<IClassDetail[]>([]);

    const fetchData = async () => {
        console.log("Fetch")
        await (await (fetch('http://localhost:8000/course/list', {method: 'GET'}))).json().then(json => setValue(json))

          }
    return(
        <Grid container direction="row">
            {value.map((item)=>(
                <Grid css={css`padding: 20px;`}>
                     <StyledCard>{item.className}</StyledCard>
                </Grid>
            ))}
        </Grid>
    )
}