import { createUseStyles } from 'react-jss'
import reactLogo from './images/reactLogo.svg'

const useStyles = createUseStyles({
  root: {
    width: 1536,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black'
  },
  title: {
    height: '18%',
    fontSize: '3.5rem',
    fontWeight: 700,
    // color: 'black'
  },
  introContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    height: '60%'
  },
  reactLogoContainer: {
    backgroundColor: 'rgb(106, 90, 205)',
    borderRadius: '50%',
    height: '6rem',
    width: '6rem',
  },
  reactLogo: {
    backgroundImage: `url(${reactLogo})`,
    height: '70%',
    width: '70%',
    margin: '1rem',
    backgroundSize: '100%',
    background: 'no-repeat',
  },
  workTitle: {
    height: '10%',
    fontSize: '2rem',
    // color: 'black'
  },
  skillsContainer: {
    display: 'flex',
    width:'40%',
    height: '7rem',
    justifyContent:'center',
    flexWrap:'wrap'
  },
  skill: {
    backgroundColor: '#1976d2',
    fontSize: '0.875rem',
    height: '1.5rem',
    marginRight:5,
    padding:'0.6rem',
    lineHeight:'1.5',
    color: '#fff',
    borderRadius: '10px',
    cursor:'pointer',
    '&:hover':{
      backgroundColor:'rgb(255, 165, 0)'
    }
  },


})

function Footer() {
  const skills = ['HTML', 'CSS', 'React', 'NodeJs', 'Express', 'Graphql', 'Postgress', 'Git','Routing','Docker','Jss','TypeScript']
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div id={'specialities'} className={classes.title}>
        {'Specialities'}
      </div>
      <div className={classes.introContainer}>
        <div className={classes.reactLogoContainer}>
          <div className={classes.reactLogo} />
        </div>
        <div className={classes.workTitle}>
          {'Full Stack Developer'}
        </div>
        <div className={classes.skillsContainer}>
          {skills.map(skill => {
            return (
              <div key={skill} className={classes.skill}>
                {skill}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
