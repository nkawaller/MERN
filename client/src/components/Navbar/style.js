import { makeStyles } from '@material-ui/core/styles';

// Pass theme into the callback if you want to use purple

export default makeStyles(() => ({
    appBar: {
        // background: 'palevioletred',
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
        // background: 'papayawhip',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px'
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center'
    }
}))
