import { createUseStyles } from 'react-jss'
import gitIcon from './images/githubIcon.svg'

const useStyles = createUseStyles({
  gitLink: {
    position: 'fixed',
    bottom: 30,
    left: 80,
    width: '3rem',
    height: '3rem',
    backgroundImage: `url(${gitIcon})`,
    backgroundSize: '100%',
    background: 'no-repeat'
  },

  scrollTop: {
    position: 'fixed',
    bottom: 30,
    right: 80,
    width: '3rem',
    height: '3rem',
    textAlign:'center',
    lineHeight:1.6,
    cursor:'pointer',
    backgroundColor:'#1976d2',
    borderRadius:'50%',
    fontSize:'2.3rem',
    color:'black',
    padding:5,
    textDecoration:'none'
  },

})

function Links() {
 
  const classes = useStyles()
  return (
    <>
      <a className={classes.gitLink} href={'https://github.com/tomerbr3456'} >{}</a>
      <a className={classes.scrollTop} href={'#startElement'} >{'^'}</a>
    </>
  );
}

export default Links;
