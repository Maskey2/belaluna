import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  pageContent: {
    padding: "30px",
    fontSize: "18px",
  },
  img: {
    height:'130px',
    [theme.breakpoints.down("sm")]: {
      height:'140px',
    },
},
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      <Container  maxWidth="lg" style={{minHeight:'63vh'}}>     
        <Typography component="h2" align="center" className={classes.pagetitle} >
          Products
        </Typography>
        <Typography component="h2" align="center" className={classes.pagesubtitle}>
         <strong>Art, Design and Development</strong>
        </Typography>
        <Typography component="h2" align="center" className={classes.pagesubtitle}>
         Custom Design
        </Typography>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={4} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <Link to="/tshirt">
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
            <p>T-Shirts</p>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/mug">
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
            <p>Mugs</p>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/button">
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
            <p>Buttons/ Keychains</p>
            </Link>
          </Grid>  
          <Grid item xs={12} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/claypot">
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
            <p>Clay Pots</p>
            </Link>
          </Grid>      
             </Grid>
            
        <hr/>
        <Typography component="h2" align="center" className={classes.pagesubtitle}>
         Digital Design
        </Typography>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={4} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
            <p>Logo Design</p> 
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
            <p>Poster/ Flyer/ Card Design</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
            <p>Website Design & Development</p>
          </Grid>  
          <Grid item xs={12} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
            <p>Brand Design</p>
          </Grid>      
             </Grid>
        <hr/>
      </Container>
    </div>
  );
}
