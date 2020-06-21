/** @jsx jsx */

import React from 'react';
import { Grid } from '@material-ui/core';
import { IClassDetail } from '../../Interfaces/ClassDetail';
import { StyledCard } from './StyledCard';
import { jsx, css } from '@emotion/core';


export const ClassCard = () => {
    let [value, setValue] = React.useState<IClassDetail[]>([]);

    React.useEffect(() => {
        fetchData()
      }, []);

      const fetchData = async ()=> {
        console.log(" card Fetch")
        const res = await fetch('http://localhost:8000/course/list', {method: 'GET'});
        const resData = await res.json();
        setValue(resData)
        console.log(value)
      }

    return(
        <Grid container direction="row">
            {value.map((item)=>(
                <Grid css={css`padding: 20px`}>
                    <StyledCard id ={item.id} >
                        <div css={css`font-family: 'Google Sans',Roboto,Arial,sans-serif; font-size: 1.375rem;`}>{item.className}</div>
                        <div>{item.section}</div>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    )
}