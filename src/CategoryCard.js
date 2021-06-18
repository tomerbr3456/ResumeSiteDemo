import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    position: 'absolute',
    opacity: props => (props.isCategoryHover||props.isCategoryHover)? 1 : 0,
    transition: 'opacity .5s ease-out',
    visibility: props =>  (props.isCategoryHover||props.isCategoryHover)? 'visible' : 'hidden',
    top: 60,
    left: 200,
    width: 300,
    height: 300,
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 200,
    width: 200,
    borderRadius: '20px',
    backgroundColor: '#fff',
  },
  projectsContainer:{
    display:'flex',
    flexDirection:'column',
    height:'100%',
    width:'100%',
    alignItems:'space-around'
  },
  project:{
    paddingLeft:20,
    height:'20%',
    color:'black',
    fontSize:'1.3rem',
    '&:first-child':{
      paddingTop:20
    }
  }
 
})
function CategoryCard(props) {
  const projects=['Fields','StopWatch','IpTracker','Wolt']
  const { handleMouseCardOut, handleMouseCardEnter } = props
  const classes = useStyles(props)
  return (
    <div className={classes.root} onMouseEnter={handleMouseCardEnter} onMouseOutCapture={handleMouseCardOut}>
      <div className={classes.cardContainer} >
        <div className={classes.projectsContainer}>
          {projects.map(project =>{
            return(
              <div key={project} className={classes.project}>
                {project}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default CategoryCard