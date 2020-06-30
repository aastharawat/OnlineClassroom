/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import Loader from 'react-loader-spinner'
export const LoaderDesign = () => {
  
    return(
     <Loader
        type="TailSpin"
        color="#cac2c2"
        height={100}
        width={100}
        css={css` 
        margin: 200px;
        padding-left: 450px;
        `}
     />
    );
   }
 export default LoaderDesign;
