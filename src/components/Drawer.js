import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Grid, Box,  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 230,
  },
  fullList: {
    width: 'auto',
  },
  color: {
    backgroundColor: '#daad86'  ,
color: 'white'    
},
reslogo: {
    height: '30px',
   
},
reslink: {
    textDecoration: 'none',
    color: '#daad86',
    fontWeight: 'bold',
    fontSize: '18px',
},
reslink2: {
    textDecoration: 'none',
    color: '#213C54',
    fontSize: '18px',
},

});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({    
    left: false,    
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>                      
              <ListItem key = {1} button divider>
             <Link to="/" className={classes.reslink}>Home</Link></ListItem>
               <ListItem key = {2} button divider>
               <Link to="/about" className={classes.reslink}>About</Link></ListItem>
               <ListItem key = {3} button divider>
               <Link to="/customer" className={classes.reslink}>Customer</Link></ListItem>
               <ListItem key = {4} button divider>
               <Link to="/blogs" className={classes.reslink}>Blogs</Link></ListItem>
               <ListItem key = {4} button divider></ListItem>
               <ListItem key = {4} button divider>
               <Link to="/category" className={classes.reslink}>Category</Link></ListItem>
               <ListItem key = {4} button divider></ListItem>
               <ListItem key = {4} button divider>
               <Link to="/products" className={classes.reslink}>Products</Link></ListItem>
               <ListItem key = {4} button divider></ListItem>
               <ListItem key = {5} button divider> 
              
               <a href="#contact" className={classes.reslink2}>Contact</a> </ListItem>
             
      </List>
    </div>
  );

  return (
    <div>             
        <Box	display={{ xs: 'block', md: 'none', sm: 'block', lg: 'none' }} >
      {['left'].map(anchor => (
        <React.Fragment key={anchor}>
            <AppBar  className={classes.color} >        
          <Toolbar >
            <Grid container direction = "row" justify = "space-between"  >            
              <MenuIcon style={{fontSize:'30px', color:'black'}} onClick={toggleDrawer(anchor, true)}>{anchor}/></MenuIcon>          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
         
          </Grid>
          </Toolbar>
        </AppBar>
        </React.Fragment>
      ))}
      </Box>
    </div>
  );
}