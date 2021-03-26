import React from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './style'

const Form = () => {

    const classes = useStyles();
    return (
            // <Paper>
            //     <Typography variant="h6">
            //         Please sign in
            //     </Typography>
            // </Paper>

            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                    <Typography variant="h6">Form Title</Typography>
                    <TextField name="title" variant="outlined" label="Title" fullWidth></TextField>
                    <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4}></TextField>
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth></TextField>
                    <div className={classes.fileInput}><FileBase></FileBase></div>
                    <Button className={classes.buttonSubmit} variant="outlined" color="default" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="outlined" color="default" size="small" fullWidth>Clear</Button>
                </form>
            </Paper>
    )
}

export default Form
