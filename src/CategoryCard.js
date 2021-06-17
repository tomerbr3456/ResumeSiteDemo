// import { useEffect } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    position: 'absolute',
    display:props=>props.isHover?'block':'none',
    top: 100,
    left: 80,
    width: 300,
    height: 300,
    transition: 'height .2s ease'
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 200,
    width: 200,
    borderRadius: '20px',
    backgroundColor: '#fff',
  },
 
})
function CategoryCard(props) {
  const { handleMouseCatrgoryOut, handleMouseCatrgoryEnter, } = props
  const classes = useStyles(props)
  return (
    <div className={classes.root} onMouseEnter={handleMouseCatrgoryEnter} onMouseOutCapture={handleMouseCatrgoryOut}>
      <div className={classes.cardContainer} >
      </div>
    </div>
  )
}
export default CategoryCard