import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Web from './../assets/wit.jpg'
import Gra from './../assets/graphic.jpg'
import Tsh from './../assets/tshirt.jpg'
import Sti from './../assets/sticker.jpg'
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  pagetitle: {
    color: "#231f20",
    paddingTop: "30px",
    fontFamily: 'Poppins', 
    fontWeight: 600,
    fontSize: "55px",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px", 
    },
    
  },
  pagesubtitle: {
    fontFamily: 'Poppins', 
    paddingBottom: "40px",
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "23px", 
    },
  },
  titles:{
    color: "#fff",
    fontSize: "20px",
    padding:'10px 30px',
    borderRadius:'5px',
    fontFamily: 'Poppins', 
    backgroundColor:"#438c9c",
    '&:hover': {
      color: "#000",
      backgroundColor:"#e2d929",
    }
 
  },
  pageContent: {
    padding: "30px",
    fontSize: "18px",
  },
  titleimg:{
    width:'300px',
    height:'auto'
  }
 
}));

export default function Product() {
  const classes = useStyles();

  return (
    <Grid>
        
      <Container maxWidth="lg" style={{minHeight:'63vh'}} >
        <Typography component="h2" align="center" className={classes.pagetitle} >
          About
        </Typography>
        <Typography component="h2" align="center" className={classes.pagesubtitle}>       
                We are  are here to
                help you promote and market your brand.<br/>              
        </Typography>
        <Grid container spacing={2} alignItems="center" justify="center" style={{marginBottom:'10px'}}>
       
          <Grid item xs={12} sm={12} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/products">
            <p className={classes.titles}>Website Development</p>
            <img src={Web} alt="" className={classes.titleimg}/>  
            </Link>
          </Grid>
         
          <Grid item xs={12} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/products">
          <p className={classes.titles}>Graphic Design</p>
          <img src={Gra} alt="" className={classes.titleimg}/> 
            </Link>
          </Grid>  
          <Grid item xs={12} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/products">
          <p className={classes.titles}>Custom T-Shirts</p>
          <img src={Tsh} alt="" className={classes.titleimg}/> 
           </Link>
          </Grid>    
          <Grid item xs={12} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/products">
          <p className={classes.titles}>Custom Stickers</p>
          <img src={Sti} alt="" className={classes.titleimg}/> 
           </Link>
          </Grid>    
             </Grid>
      </Container>

       
    </Grid>
  );
}
