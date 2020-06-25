/** @jsx jsx */

import React from 'react';
import { Grid } from '@material-ui/core';
import { IClassDetail } from '../../Interfaces/ClassDetail';
import { StyledCard } from './StyledCard';
import { jsx, css } from '@emotion/core';
import LoaderDesign from '../../Shared/Loader';


export const ClassCard = () => {
    let [value, setValue] = React.useState<IClassDetail[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetchData()
      }, []);

      const fetchData = async ()=> {
        const res = await fetch('http://localhost:8000/course/list', {method: 'GET'});
        const resData = await res.json();
        setValue(resData)
        setIsLoading(false)
      }

    return(
        <Grid container direction="row">
            {isLoading && <LoaderDesign/>}
            {value.map((item, key)=>(
                <Grid css={css`padding: 20px`}>
                    <StyledCard id={item._id} >
                        <div css={css`font-family: 'Google Sans',Roboto,Arial,sans-serif; font-size: 1.375rem;`}>{item.className}</div>
                        <div>{item.section}</div>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    )
}