import background from './images/SimpleShiny.svg'
import hacking2 from './images/hacking2.png'
import AppbBar from './AppBar'
import { createUseStyles } from 'react-jss'
import { useEffect, useState } from 'react'
import HeaderContent from './HeaderContent'

const useStyles = createUseStyles({
  img: {
    backgroundImage: `url(${background})`,
    backgroundSize: '120%',
    background: 'no-repeat',
    width: 1536,
    height: 800,
    display:'flex'
    // position: 'relative',
  },
  hackingImg: {
    position: 'absolute',
    backgroundImage: `url(${hacking2})`,
    backgroundSize: '100%',
    background: 'no-repeat',
    width: 400,
    height: 400,
    right:150,
    '&:hover':{
      transform:'scale(1.1)',
      transition:'transform .3s ease-out'
    }
  }
})
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    // let scrollTop = event.srcElement.body.scrollTop
    console.log('height:', window.scrollY)
    if (window.scrollY > 10)
      setIsScrolled(true)
    else
      setIsScrolled(false)
  }

  const classes = useStyles()
  return (
    <div>
      <div className={classes.img} >
        <HeaderContent/>
        <div className={classes.hackingImg} />
      </div>
      <AppbBar isScrolled={isScrolled} />
    </div>
  )
}
export default Header