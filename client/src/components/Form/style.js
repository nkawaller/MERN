import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: '30px'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0'
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    button: {
        background: 'black',
        color: 'white',
        '&:hover': {
            color: 'black',
            border: '0.5px solid #888888'
        }
    }
}))