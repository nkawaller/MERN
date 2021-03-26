import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './style'

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        tilte: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const classes = useStyles();
    const handleSubmit = () => {

    }
    const clear = () => {
        
    }
    return (
            // <Paper>
            //     <Typography variant="h6">
            //         Please sign in
            //     </Typography>
            // </Paper>

            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">Form Title</Typography>
                    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/>
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
                    <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
                    <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                    <Button className={classes.buttonSubmit} variant="outlined" color="default" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="outlined" color="default" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
    )
}

export default Form
