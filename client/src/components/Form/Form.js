import React from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';

const Form = () => {
    return (
            // <Paper>
            //     <Typography variant="h6">
            //         Please sign in
            //     </Typography>
            // </Paper>

            <Paper>
                <form>
                    <Typography>Form Title</Typography>
                    <TextField></TextField>
                    <TextField></TextField>
                    <TextField></TextField>
                    <Button>Form Button 1</Button>
                    <Button>Form Button 2</Button>
                </form>
            </Paper>
    )
}

export default Form
