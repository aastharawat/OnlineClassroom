/** @jsx jsx */

import {jsx, css} from '@emotion/core';
import {Grid, Button, TextField, Modal} from '@material-ui/core';
import { SignUp } from './SignUp';
import React from 'react';
import styled from '@emotion/styled';

const styledSignUpPage = css`
border-radius: 10px ;
margin: 200px;
width: 30% !important;
background-color: white;
position: unset;
margin-left: 500px;    
padding: 2rem;
`;

const StyledLink = styled(Grid)`
padding: 1rem;
color: #55558f;
:hover{
    text-decoration: underline;
    color: black;
}
`;

export function SignIn(props: any){
    const [openSignUp, setOpenSignUp] = React.useState<boolean>(props)
    const[value, setValue] = React.useState<string>()
    const[email, setEmail] = React.useState<string>()
    const[password, setPassword] = React.useState<string>()

    const userData = {"email": email, "password": password}

    const handleSignInForm = async (e: any) =>{
        console.log(userData)      
        await fetch("http://localhost:8000/user/login", 
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userData)
        }).then((res) => res.json())
        .then((data) =>  setValue(data))
        .catch((err)=>console.log(err))
        // props.loggedInUser()
    }   
    return(
        <Modal open={props.isSignUpOpen} onClose={()=>props.onModalClose()}>  
        {openSignUp    
        ?    
        <Grid
        component="form"
        onSubmit={handleSignInForm}
        container
        justify="center"
        css={styledSignUpPage}
        >

        <TextField
        label="Email"
        type="email"
        name="email"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={(e)=>{setEmail(e.target.value)}}
        color="primary"
        required
        />
        
        <TextField
        label="Password"
        type="password"
        name="password"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={(e)=>{setPassword(e.target.value)}}
        color="primary"
        required
        />

        <br/>
        <div>
        <Button
        variant="contained" 
        color="primary"
        type="submit"
        >
        Submit
        </Button></div>
        <StyledLink container justify="center"  onClick={()=>setOpenSignUp(!openSignUp)}>
            Create new account.
        </StyledLink>
        </Grid>
        :
        <SignUp onSignUpModalOpen = {()=>{setOpenSignUp(!openSignUp)}}/>
        }
        </Modal>
      )
}

