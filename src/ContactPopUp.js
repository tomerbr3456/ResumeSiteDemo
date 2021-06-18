import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    height: 800,
    width: 300,
    right: 0,
    top: 0,
    transition: 'opacity .3s ease-out',
    opacity: props => props.openContact? 1 : 0,
    backgroundColor: '#FFF',
    visibility: props => props.openContact? 'visible' : 'hidden',
    '@media(max-width:600px)': {
      width: '100%',
    },
  },
  closeIcon: {
    cursor:'pointer',
    margin: 10,
    transition:'opacity .2s',
    fontSize: '2rem',
    backgroundColor: 'blue',
    color: 'black',
    textAlign: 'center',
    lineHeight: 1.5,
    width: 50,
    height: 50,
    borderRadius: '50%',
    '&:hover':{
      opacity:0.9
    }
  }
})

function ContactPopUp(props) {
  const { handleOpenContact } = props
  const classes = useStyles(props)
  return (
    <>
      <div className={classes.root} >
        <div className={classes.closeIcon} onClick={handleOpenContact}>{'X'}</div>
      </div>

    </>
  );
}

export default ContactPopUp;
