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
import Np from './../assets/products/np.PNG'
import Everest from './../assets/products/everest.jpg'
import Wit from './../assets/products/wit.jpg'
import Poster from './../assets/products/poster.JPG'
import Logo from './../assets/products/logo.JPG'
import Event from './../assets/products/event.png'


const useStyles = makeStyles((theme) => ({
  pagetitle: {
    color: "#231f20",
    marginBottom:'40px', 
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      padding: "30px",
      marginBottom:'10px', 
    },

  },
  pageContent: {
    fontSize: "20px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      fontSize: "20px",
      padding: "0 20px",
    },
  },
  links: {
    textDecoration: 'none',
    color: 'black',
    fontSize: "22px",
  },
  img: {
    height: 'auto',
    width: '300px',
    [theme.breakpoints.down("sm")]: {
      width: '250px',
    },
  },
  imgb: {
    height: 'auto',
    width: '500px',
    [theme.breakpoints.down("sm")]: {
      width: '250px',
    },
  },
hr:{
  margin:'40px',
  border: 'none'
}
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      <div maxWidth="xl" style={{ minHeight: '63vh', marginBottom:'40px' }}>

      <Typography component="h2" align="center" className={classes.pagetitle} id="web">
          Website Development
        </Typography>
       
        <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={4} lg={4} align="center" className="animate__animated animate__jackInTheBox" >
          <a href="https://www.wit-selu.com/" target="_blank">
            <img src={Wit} alt="" className={classes.imgb} />
            <p  className={classes.pageContent} >Women in Technology</p>
            <p >WIT Organization, SELU, LA </p>   </a>
          </Grid> 
          <Grid item xs={12} sm={12} md={4} lg={4} align="center" className="animate__animated animate__jackInTheBox" style={{ marginTop: '10px' }}>
           <a href="https://www.everestkitchenalbany.com/" target="_blank">
            <img src={Everest} alt="" className={classes.imgb} />
            <p  className={classes.pageContent} >Everest Kitchen</p>
            <p  >A Nepali Restaurent in Albany, CA</p></a>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} align="center" className="animate__animated animate__jackInTheBox" >
          <a href="https://www.namasteypatio.com/" target="_blank">
            <img src={Np} alt="" className={classes.imgb} />
            <p  className={classes.pageContent} >Namastey Patio</p>
            <p  className={classes.pageContent} >Nepalese and Indian Restaurent in Oakland, CA </p>           
            </a>
          </Grid>          
        </Grid>
<hr className={classes.hr}/>

        <Typography component="h2" align="center" className={classes.pagetitle} id="design">
         Graphic Design
        </Typography>
       
        <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={4} lg={4} align="center" className="animate__animated animate__jackInTheBox" >        
            <img src={Poster} alt="" className={classes.imgb} />
            <p  className={classes.pageContent} >International Women's Dayy</p>
           
          </Grid> 
          <Grid item xs={12} sm={12} md={4} lg={4} align="center" className="animate__animated animate__jackInTheBox" style={{ marginTop: '10px' }}>
          
            <img src={Logo} alt="" className={classes.imgb} />
            <p  className={classes.pageContent} >Bae is Hangry Logo</p>
         
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} align="center" className="animate__animated animate__jackInTheBox" >       
            <img src={Event} alt="" className={classes.imgb} />
            <p  className={classes.pageContent} >Event Invitation Card</p> 
          </Grid>          
        </Grid>
        <hr className={classes.hr}/>

        <Typography component="h2" align="center" className={classes.pagetitle} id="tshirts">
          T-Shirt Designs
        </Typography>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" style={{ marginTop: '10px' }}>
            <img src={Eve} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Everest Kitchen</p>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Cup} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Code & Code</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Har} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Harahan Handyman</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Ope} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Open Arms</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Tri} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Nepal & Always</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Tri2} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Trio Design</p>
          </Grid>
        </Grid>
        <hr className={classes.hr}/>
        <Typography component="h2" align="center" className={classes.pagetitle} id="stickers">
          Stickers
        </Typography>
        <br></br>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={3} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Girl} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Girl Power</p>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Good} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Good Vibes</p>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Self} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Self Love</p>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Stay} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Stay Sassy</p>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={This} alt="" className={classes.img} />
            <p  className={classes.pageContent} >This too shall pass</p>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Twe} alt="" className={classes.img} />
            <p  className={classes.pageContent} >2020, Would not Recommend</p>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={Strong} alt="" className={classes.img} />
            <p  className={classes.pageContent} >Stay Strong</p>
          </Grid>
        </Grid>

      </div>
    </div>
  );
}
