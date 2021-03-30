import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  nameTags: {
    // position: 'absolute',
    // top: '20px',
    // left: '20px',
    display: 'flex',
    margin: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'aqua'
    // color: 'black',
  },
  date: {
    padding: '0 16px'
    
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    // justifyContent: 'space-between',
    justifyContent: 'flex-end',
    margin: '20px',
    background: 'aqua'
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
