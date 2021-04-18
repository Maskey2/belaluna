import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Carousel from "./Carosel";
import Button from '@material-ui/core/Button';
import Bulb from './../assets/bulbidea.jpg'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "220px",
    maxWidth: "300px",
    padding: "15px",
    margin: "1px",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "350px",
    [theme.breakpoints.down("sm")]: {
      height: "240px",
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
  button:{
    color: "#fff",
    fontFamily: 'Poppins', 
    backgroundColor:"#438c9c",
    '&:hover': {
      color: "#000",
      backgroundColor:"#e2d929",
    }
  }
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
      <Carousel />
      <Container className={classes.cardGrid} maxWidth="xl" >
        {/* End hero unit */}
            
            {/* <img
              src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png"
              alt=""
              className={classes.img}
            /> */}    
            <p             
              style={{ fontSize: "50px", textAlign:'center', margin:'auto'}}
              className="animate__animated animate__zoomIn"
            >
              Check out our recent Design Projects
            </p>
            <br></br> 
            <p             
              style={{ fontSize: "50px", textAlign:'center', margin:'auto'}}
              className="animate__animated animate__zoomIn"
            >  <Link to="/products" className={classes.link}>
            <Button variant="contained" size="large" className={classes.button} >
          Recent Projects
        </Button>  </Link>
        </p>       
       
        
      </Container>
      <div style={{ backgroundColor: "#e4e4e4" }}>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid
            container
            spacing={4}
            style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <p
                align="center"
                style={{ fontSize: "40px" }}
                className="animate__animated animate__zoomIn"
              >
              Have an idea?<br></br>
              We'll help you bring it live.
              </p>
              
            </Grid>
            <Grid     item  xs={12} sm={12} md={6} lg={6} align="center" className="animate__animated animate__jackInTheBox"    >
              <img
                src={Bulb}
                alt=""
                className={classes.img}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
