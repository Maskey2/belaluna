import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "220px",
    maxWidth: "300px",
    padding: "15px",
    margin:'1px', 
    backgroundColor:'black'  ,
    display:'flex',
    alignItems:'center',
   
  },
  img: {
      height:'300px',
      [theme.breakpoints.down("sm")]: {
        height:'200px',
      },
  },
  title: {
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
     

      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p align="center" style={{fontSize:'50px'}} className="animate__animated animate__zoomIn">Bella Luna</p>
            <Typography className="animate__animated animate__fadeInDown animate__delay-1s">
             
              <p>I graduated from Southeastern Louisiana University with Bachelors degree in Computer Science with minor in Mathematics.</p> 
              <p>I am a Front-End Developer and a Graphic Designer from New Orleans, LA</p>
              <p>Besides Designing and Coding, I love to watch movies, cook, play guitar and paint!</p>
            </Typography>          
          </Grid>
        </Grid>
            <div style={{margin:'100px 0'}}></div>
        <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <p align="center" style={{fontSize:'50px'}} className="animate__animated animate__zoomIn">What we do</p>
            <Typography className="animate__animated animate__fadeInDown animate__delay-1s">
             
              <p>I graduated from Southeastern Louisiana University with Bachelors degree in Computer Science with minor in Mathematics.</p> 
              <p>I am a Front-End Developer and a Graphic Designer from New Orleans, LA</p>
              <p>Besides Designing and Coding, I love to watch movies, cook, play guitar and paint!</p>
            </Typography>          
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
          </Grid>
          
        </Grid>

        
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
