import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import Eve from './../assets/products/eve.jpg'
import Cup from './../assets/products/cup.jpg'
import Har from './../assets/products/har.jpg'
import Ope from './../assets/products/open.jpg'
import Tri from './../assets/products/tri.jpg'
import Tri2 from './../assets/products/tri2.jpg'
import Girl from './../assets/products/girl.jpg'
import Good from './../assets/products/good.jpg'
import Self from './../assets/products/self.jpg'
import Stay from './../assets/products/stay.jpg'
import This from './../assets/products/this.jpg'
import Strong from './../assets/products/strong.jpg'
import Twe from './../assets/products/2020.jpg'

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
    fontSize: "35px",
    borderBottom: '3px solid #438c9c',
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "23px", 
      marginTop:'60px'
    },
  },
  links: {
    textDecoration:'none',
    color:'black',
    fontSize: "22px",
  },
  img: {
    height:'auto',
    width:'300px',
    [theme.breakpoints.down("sm")]: {
      width:'150px',
    },  
},
headerimg: {
  height:'auto',
  width:'100%',
  [theme.breakpoints.down("md")]: {
    marginTop:'55px'
  },  
},


}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      <div  maxWidth="xl" style={{minHeight:'63vh'}}> 
      <Typography component="h2" align="center" className={classes.pagesubtitle}>
        T-Shirt Designs
        </Typography> 
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={6} sm={12} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" style={{marginTop:'10px'}}>
            <img src={Eve} alt="" className={classes.img}/>
            <p >Everest Kitchen</p>
             </Grid>
          <Grid item xs={6} sm={12} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
         <img src={Cup} alt="" className={classes.img}/>
            <p >Code & Code</p>
          </Grid>
           <Grid item xs={6} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <img src={Har} alt="" className={classes.img}/>
            <p >Harahan Handyman</p>
            </Grid>   
          <Grid item xs={6} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
           <img src={Ope} alt="" className={classes.img}/>
            <p >Open Arms</p>
           </Grid>   
          <Grid item xs={6} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <img src={Tri} alt="" className={classes.img}/>
            <p >Nepal & Always</p>           
          </Grid> 
          <Grid item xs={6} sm={12} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
          <img src={Tri2} alt="" className={classes.img}/>
            <p >Trio Design</p>
            </Grid>    
             </Grid>

         <Typography component="h2" align="center" className={classes.pagesubtitle}>
        Stickers
        </Typography> 
       <br></br>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={6} sm={3} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src={Girl} alt="" className={classes.img}/>
            <p >Girl Power</p> 
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src={Good} alt="" className={classes.img}/>
            <p >Good Vibes</p>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src={Self} alt="" className={classes.img}/>
            <p >Self Love</p>
          </Grid>  
          <Grid item xs={6} sm={3} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src={Stay} alt="" className={classes.img}/>
            <p >Stay Sassy</p>
          </Grid>  
          <Grid item xs={6} sm={3} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src={This} alt="" className={classes.img}/>
            <p >This too shall pass</p>
          </Grid> 
          <Grid item xs={6} sm={3} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src={Twe} alt="" className={classes.img}/>
            <p >2020, Would not Recommend</p>
          </Grid> 
          <Grid item xs={6} sm={3} md={3} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img src={Strong} alt="" className={classes.img}/>
            <p >Stay Strong</p>
          </Grid>      
             </Grid>
       
      </div>
    </div>
  );
}
