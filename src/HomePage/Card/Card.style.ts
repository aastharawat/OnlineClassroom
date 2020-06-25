/** @jsx jsx */
import {  css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const styledCard = css`
    width: 300px;
    height: 300px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    :hover{
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    }
`

export const StyledLink = styled(Link)`
text-decoration: none;
`

export const styledCardBottom = css`
    background-image: url("https://gstatic.com/classroom/themes/img_kayaking.jpg");
    height: 60px;
    padding: 20px;
    color: white;
    border-radius: 5px 5px 0px 0px;
`

export const styledIcon = css`
    color: #827979;
    padding: 10px;
    float: right;
`