import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import a1 from './../assets/a1.jpg'
import a2 from './../assets/a2.jpg'
import a3 from './../assets/a3.jpg'
import a4 from './../assets/a4.jpg'
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  pagetitle: {
    color: "#231f20",
    paddingTop: "30px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 600,
    fontSize: "55px",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px", 
    },
    
  },
  pagesubtitle: {
    fontFamily: "Roboto, sans-serif",
    paddingBottom: "40px",
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "23px", 
    },
  },
  img:{
    height: "auto",
    width: "100%",
    '&:hover': {
      cursor:'pointer',
      transform:'scale(1.05)',
      transition: 'transform .5s ease-in-out',
   },   
  },
  pageContent: {
    padding: "30px",
    fontSize: "18px",
  },
 
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
                provide you with the best Custom Projects.<br/>
              
        </Typography>
        <Grid container spacing={2} alignItems="center" justify="center" style={{marginBottom:'10px'}}>
       
          <Grid item xs={12} sm={12} md={4} lg={4} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/tshirt">
            <img src={a1} alt="" className={classes.img}/>
            </Link>
          </Grid>
         
          <Grid item xs={12} sm={12} md={6} lg={4} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/claypot">
            <img src={a3} alt="" className={classes.img}/>
            </Link>
          </Grid>  
          <Grid item xs={12} sm={12} md={6} lg={4} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/mug">
            <img src={a4} alt="" className={classes.img}/>
           </Link>
          </Grid>      
             </Grid>
      </Container>

       
    </Grid>
  );
}
