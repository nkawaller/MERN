import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    container: {
        background: 'palevioletred',
        display: 'flex',
        alignItems: 'center',
        marginTop: '7rem'
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    }
}))