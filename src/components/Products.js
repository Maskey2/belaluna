import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import Header1 from './../assets/productheader1.jpg'
import Header2 from './../assets/productheader2.jpg'

const useStyles = makeStyles((theme) => ({
  pagetitle: {
    color: "#231f20",
    paddingTop: "30px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "55px",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px", 
    },
    
  },
  pagesubtitle: {
    paddingBottom: "40px",
    fontSize: "25px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "23px", 
    },
  },
  links: {
    textDecoration:'none',
    color:'black',
    fontSize: "22px",
  },
  img: {
    height:'auto',
    width:'80%',
},
headerimg: {
  height:'auto',
  width:'100%',
  [theme.breakpoints.down("md")]: {
    marginTop:'55px'
  },  
},
also:{
  fontSize:'75px',
  [theme.breakpoints.down("sm")]: {
    fontSize:'45px',
  },
}
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      <div  maxWidth="xl" style={{minHeight:'63vh'}}> 
        
        <img src={Header1} alt="" className={classes.headerimg}/>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={6} sm={12} md={4} lg={3} align="center"  className="animate__animated animate__jackInTheBox" style={{marginTop:'10px'}}>
            <Link to="/tshirt" className={classes.links}>
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
            <p >T-Shirts</p>
            </Link>
          </Grid>
          <Grid item xs={6} sm={12} md={4} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/mug" className={classes.links}>
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
            <p >Mugs</p>
            </Link>
          </Grid>
          <Grid item xs={6} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/button" className={classes.links}>
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
            <p >Buttons/ Keychains</p>
            </Link>
          </Grid>  
          <Grid item xs={6} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <Link to="/claypot" className={classes.links}>
            <img src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png" alt="" className={classes.img}/>
            <p >Stickers</p>
            </Link>
          </Grid>      
             </Grid>

        {/* <Typography component="h2" align="center" className={classes.pagesubtitle}>
         Digital Design
        </Typography> */}
        <p className={classes.also} align="center">Also,</p>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={6} sm={12} md={4} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
            <p >Logo Design</p> 
          </Grid>
          <Grid item xs={6} sm={12} md={4} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
            <p >Poster/ Flyer/ Card Design</p>
          </Grid>
          <Grid item xs={6} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
            <p >Website Design & Development</p>
          </Grid>  
          <Grid item xs={6} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg" alt="" className={classes.img}/>
            <p >Brand Design</p>
          </Grid>      
             </Grid>
       
      </div>
    </div>
  );
}
