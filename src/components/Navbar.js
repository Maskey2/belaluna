import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './../assets/logo.png'

const useStyles = makeStyles(theme => ({
  root: {    
    [theme.breakpoints.down('xs')]: {
      display:'none', 
    },    
  },
  
  logo:{
    height:"75px",
    padding:'5px',
    [theme.breakpoints.down('xs')]: {
      display:'none', 
      
    },
  },
  list : {
    width : 200,
  },  
  sideBarIcon : {
    cursor : "pointer",
  },
  link:
    { 
      fontSize: '22px',
      textDecoration: 'none',
      color: '#438c9c',
      fontFamily:'Poppins',
      display:'flex',
      padding:'8px', 
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('xs')]: {
        display:'none',
      },
      '&:hover': {
        color: '#ffffff',
        backgroundColor:'#438c9c',
        transform:'scale(1.01)',
        transition: 'transform .5s ease-in-out',
     },   
    },
        
    reslink:
    {
        textDecoration: 'none',
        color: '#438c9c',
    },
     reslink2:
    {
        textDecoration: 'none',
        color: '#438c9c',
       fontSize:'15px'
    },
    
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,  
  window: PropTypes.func,
};

function ElevateAppBar(props) {
  const classes = useStyles();
 

  return (    
    <React.Fragment>
      <ElevationScroll {...props}> 
      
      <AppBar className={classes.root} position="sticky" style={{ backgroundColor: '#fafafa', height:'80px'}}>        
        <Toolbar >
        
        <Typography component={'span'} color="inherit" style={{flexGrow:1}}>  
        <Link to="/" >
        <img src={Logo} alt="" className={classes.logo}/>  
        </Link>       
          </Typography>
          <Typography component={'span'} color="inherit" style={{flexGrow:1}}>           
          </Typography>
        <Typography component={'span'} color="inherit" style={{flexGrow:1}}> 
          <Link to="/" className={classes.link}>Home
          </Link></Typography>
          <Typography component={'span'} color="inherit" style={{flexGrow:1}}> 
          <Link to="/services" className={classes.link}>Services
          </Link></Typography>
          <Typography component={'span'}  color="inherit" style={{flexGrow:1}}> 
          <Link to="/products" className={classes.link}>Designs</Link></Typography>  
            <Typography component={'span'}   color="inherit"style={{flexGrow:1}} >
            <Link to="/contact" className={classes.link}>Contact
            </Link></Typography>  
            <Typography component={'span'}   color="inherit"style={{flexGrow:1}} >
            <Link to="/contact" className={classes.link}>
            </Link></Typography> 
            {/* <Typography component={'span'}   color="inherit"style={{float:'right'}} >
            <Link to="/contact" className={classes.link}>Shop (0)
            </Link></Typography>
            <Typography component={'span'}   color="inherit"style={{float:'right', border:'1px solid black', margin:'5px'}} >
            <Link to="/contact" className={classes.link}>Login
            </Link></Typography>  */}
             
      </Toolbar>
      </AppBar>
      </ElevationScroll>    
      
    </React.Fragment>
  );
};


export default ElevateAppBar;