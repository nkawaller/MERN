import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        background: 'palevioletred',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px'
    },
    heading: {
        color: 'black',
    },
    toolbar: {
        background: 'papayawhip',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px'
    }
}))
