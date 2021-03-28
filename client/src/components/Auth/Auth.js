import React from 'react'

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './style'
const Auth = () => {
    const classes = useStyles();

    const handleChange = () => {}

    const isSignup = false;

    const handleSubmit = () => {

    }


    return (
    <Container component='main' maxWidth="xs">
        <Paper className={classes.paper} elevation={15}>
            <Avatar className={classes.avatar}>
                <LockOutLinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} half />

                </Grid>
                <Button></Button>
                <GoogleLogin>

                </GoogleLogin>
                <Grid containter justify ="flex-end">
                    <Grid item>
                        <Button>Sign Up</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>

    </Container>
   )
}

export default Auth
