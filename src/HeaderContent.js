import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    width:'30%',
    paddingLeft:125,
    paddingTop:150,
    height:'80%',
    display:'flex',
    flexDirection:'column'
  },
  content:{
    paddingTop:'3.5rem',
    fontSize:'3.5rem',
    fontWeight:700,
    height:'50%',
  },
  moreInfoButton:{
    fontSize:'1.5rem',
    backgroundColor:'rgb(60, 179, 113)',
    height:'5%',
    width:'12rem',
    padding:'0.5rem',
    textAlign:'center',
    borderRadius:'10px',
    cursor:'pointer',
    lineHeight:1.5,
    color:'#fff',
    textDecoration:'none',
    '&:hover':{
      opacity:0.9
    }
  }
})
function HeaderContent() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {`If You Came Here Its a Sign That You Made The Right Choice`}
      </div>
      <a href={'#specialities'} className={classes.moreInfoButton}>{'More Info'}</a>
    </div>
  )
}
export default HeaderContent