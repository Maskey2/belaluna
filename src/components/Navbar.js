import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles(theme => ({
  root: {    
    [theme.breakpoints.down('sm')]: {
   
    },    
  },
  tree:{
    fontSize: '16px',
    textDecoration: 'none',
    color: 'black',
    display:'flex',
    marginBottom:'8px', 
    justifyContent: 'space-evenly',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginBottom:'0px', 
      
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
      fontSize: '16px',
      textDecoration: 'none',
      color: 'black',
      display:'flex',
      marginBottom:'8px', 
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        display:'none',
      },
      '&:hover': {
        transform:'scale(1.1)',
        transition: 'transform .7s ease-in-out',
     },   
    },
        
    reslink:
    {
        textDecoration: 'none',
        color: '#213C54',
    },
     reslink2:
    {
        textDecoration: 'none',
        color: '#213C54',
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
      <AppBar className={classes.root} position="sticky" style={{ backgroundColor: '#daad86', height:'55px'}}>        
        <Toolbar >
        <Typography component={'span'} color="inherit" style={{flexGrow:1}}> 
          <Link to="/" className={classes.link}>Home
          </Link></Typography>
          <Typography component={'span'} color="inherit" style={{flexGrow:1}}> 
          <Link to="/about" className={classes.link}>About
          </Link></Typography>
          <Typography component={'span'}  color="inherit" style={{flexGrow:1}}> 
          <Link to="/category" className={classes.link}>Category</Link></Typography>
          <Typography component={'span'}  color="inherit" style={{flexGrow:1}}> 
          <Link to="/category" className={classes.link}>Category</Link></Typography>
          <Typography component={'span'}   color="inherit"style={{flexGrow:1}} >
            <Link to="/category" className={classes.link}>Category
            </Link></Typography> 
            <Typography component={'span'}   color="inherit"style={{flexGrow:1}} >
            <Link to="/contact" className={classes.link}>Contact
            </Link></Typography>  
      </Toolbar>
      </AppBar>
      </ElevationScroll>    
      
    </React.Fragment>
  );
};


export default ElevateAppBar;