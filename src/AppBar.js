import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import CategoryCard from './CategoryCard'
import ContactPopUp from './ContactPopUp'

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    width: '100vw',
    height: 60,
    top: 0,
    border: stylesProps => stylesProps.isScrolled ? '1px solid white' : 'transparent',
    transition: `background .2s ease-in-out,border .2s ease-in-out,margin-top .1s`,
    backgroundColor: stylesProps => stylesProps.background,
    marginTop: stylesProps => stylesProps.paddingTop,
    boxShadow: stylesProps => stylesProps.isScrolled ? '0px 2px 10px #888888' : 'none'
  },
  catrgoriesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '20%',
    paddingLeft: 70,
    paddingTop: 30,
    '@media(max-width:600px)':{
      width: '70%',
      paddingLeft: 10,
    }
  },
  barContainer: {
    position:'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  category: {
    fontSize: '1.3rem',
    paddingLeft: 20,
    height: '100%',
    letterSpacing: '-1px',
    fontWeight: 500,
    color: stylesProps => stylesProps.color,
    cursor: 'pointer',
    '&:hover': {
      color: 'rgba(0, 189, 120, 0.5)'
    }
  },
  contact:{
    position:'absolute',
    top: stylesProps => stylesProps.isScrolled?13:5,
    transition:'right .2s,top .1s',
    right:stylesProps=>stylesProps.openContact? 400:100,
    '@media(max-width:600px)':{
      top: stylesProps => stylesProps.isScrolled?13:14,
      right:stylesProps=>stylesProps.openContact? 100:20,
    }
  }
  
})


function AppBar(props) {

  const { isScrolled } = props
  const [openContact, setOpenContact] = useState(false)
  const [isCategoryHover, setIsCategoryOver] = useState(false)
  const [isCardHover, setIsCardHover] = useState(true)
  

  const handleOpenContact = ()=>{
    setOpenContact(!openContact)
  }

  const handleMouseCategoryEnter = () => {
    setIsCategoryOver(true)
  }
  const handleMouseCardEnter = () => {
    setIsCardHover(true)
  }
  const handleMouseCardOut = () => {
    setIsCardHover(false)
  }
  const handleMouseCategoryOut = () => {
    setIsCategoryOver(false)
  }

  const stylesProps = {
    background: isScrolled ? '#fff' : 'transparent',
    color: isScrolled ? 'black' : 'white',
    paddingTop: isScrolled ? '0px' : '20px',
    isScrolled: isScrolled,
    openContact:openContact
  }
  // let background = 
  const classes = useStyles(stylesProps)
  return (
    <div className={classes.root} >
      <div className={classes.barContainer}>
        <div onClick={handleOpenContact} className={classes.category + " " + classes.contact}>{'Contact'}</div>
        <div className={classes.catrgoriesContainer}>
          <span className={classes.category }>
            {'Tomer site'}
          </span>
          <div  className={classes.category}>
            {'Resume'}
          </div>
          <div className={classes.category} onMouseEnter={handleMouseCategoryEnter} onMouseOut={handleMouseCategoryOut}>
            {'Projects'}
            <CategoryCard isCardHover={isCardHover} isCategoryHover={isCategoryHover} handleMouseCardOut={handleMouseCardOut} handleMouseCardEnter={handleMouseCardEnter} />
          </div>
        </div>
      </div>
      <ContactPopUp handleOpenContact={handleOpenContact} openContact={openContact}/>
    </div>
  )
}
export default AppBar