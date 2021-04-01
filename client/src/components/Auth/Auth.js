import React, { useState, useRef, useEffect } from 'react'

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TweenMax, Power3 } from 'gsap';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './style'
import Input from './Input'
import Icon from './Icon'
import { signin, signup } from '../../actions/auth'


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)


    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }

    const googleSuccess = async (res) => {
    
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: {result, token}})
            history.push('/')
        } catch (error) {
           console.log(error) 
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google sign in failed. Please try again later")
    }

    let authForm = useRef(null);


  useEffect(() => {
    TweenMax.to(
      authForm.current,
      5,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
    )
  }, [])

    return (
    <Container component='main' maxWidth="xs">
        <Paper ref={authForm} className={classes.paper} elevation={15}>
            <Avatar className={classes.avatar}>
                <LockOutLinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    { isSignup && (
                    <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                    </>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                </Grid>
                <Button type="submit" fullWidth variant="outlined" color="default" className={classes.submit}>{isSignup ? "Sign Up" : "Sign In"}</Button>
                <GoogleLogin 
                    clientId='595992007067-stcqiu67m538hdqmkuo0b6sfeftav46c.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <Button className={classes.googleButton}
                        color="default"
                        fullWidth
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        startIcon={<Icon />}
                        variant='outlined'
                        >
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <Grid container>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>

    </Container>
   )
}

export default Auth
