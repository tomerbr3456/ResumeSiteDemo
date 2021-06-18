import { createUseStyles } from 'react-jss'
import { projects } from './global'

import Project from './Project'
const useStyles = createUseStyles({
  root: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    backgroundColor: '#FFF',
    paddingBottom:'50px'
  },
  title: {
    paddingTop: 50,
    height: '18%',
    fontSize: '3.5rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
    fontWeight: 400,
    flexWrap: 'wrap'
  }
},

)

function Projects() {

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {'My Projects'}
      </div>
      <div className={classes.container}>
        {projects.map(project => <Project key={project} project={project} />)}
      </div>
    </div>
  );
}

export default Projects;
