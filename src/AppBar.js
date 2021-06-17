import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import CategoryCard from './CategoryCard'

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    width: 1536,
    height: 60,
    top: 0,
    border: stylesProps => stylesProps.isScrolled ? '1px solid white' : 'transparent',
    transition: 'background .2s ease-in-out,border .2s ease-in-out,margin-top .1s;',
    backgroundColor: stylesProps => stylesProps.background,
    marginTop: stylesProps => stylesProps.paddingTop,
    boxShadow: stylesProps => stylesProps.isScrolled ? '0px 2px 10px #888888' : 'none'
  },
  catrgoriesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '15%',
    paddingLeft: 70,
    paddingTop: 30
  },
  barContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  category: {
    fontSize: '1rem',
    paddingLeft: 20,
    height: '100%',
    letterSpacing: '-1px',
    fontWeight: 500,
    color: stylesProps => stylesProps.color,
    cursor: 'pointer',
    // '&:hover': {
    //   opacity: 0.9,
    //   color: 'purple'
    // }
  },
  title: {
    '&:hover': {
      opacity: 0.9,
      color: 'gray'
    }
  }
})


function AppBar(props) {

  const { isScrolled } = props
  const [isHover, setIsOver] = useState(false)
  const [isCategoryHover, setIsCategoryOver] = useState(true)

  const handleMouseOver = () => {
    setIsOver(true)
  }
  const handleMouseCategoryEnter = () => {
    setIsCategoryOver(true)
  }
  const handleMouseCatrgoryOut = () => {
    setIsCategoryOver(false)
  }
  const handleMouseOut = () => {
    setIsOver(false)
  }

  const stylesProps = {
    background: isScrolled ? '#fff' : 'transparent',
    color: isScrolled ? 'black' : 'white',
    paddingTop: isScrolled ? '0px' : '20px',
    isScrolled: isScrolled
  }
  // let background = 
  const classes = useStyles(stylesProps)
  return (
    <div className={classes.root} >
      <div className={classes.barContainer}>
        <div className={classes.catrgoriesContainer}>
          <span className={classes.category + " " + classes.title}>
            {'Tomer site'}
          </span>
          <div onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut} className={classes.category}>
            {'Resume'}
            <CategoryCard isHover={isHover} handleMouseCatrgoryOut={handleMouseCatrgoryOut} handleMouseCategoryEnter={handleMouseCategoryEnter} />
          </div>
          <div className={classes.category}>
            {'Projects'}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AppBar