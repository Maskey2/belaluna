import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from 'react-responsive-carousel';
import Header1 from '../assets/hero-image.jpg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    legend: {
      fontSize: "25px",
      color: "black",
      backgroundColor:'#white',
      padding: "10px",
      position: "absolute",
      //zIndex: "999",
      margin: "auto",      
      right: "41%",
      top: "65%",
      textAlign: "center",
      width: "17%",
      borderRadius: "10px",
      border:'2px solid black',
      "&:hover": {
        transform: "scale(1.1)",
        transition: "transform .5s ease-in-out",
      },
      [theme.breakpoints.down("md")]: {
       display:'none'
      },
    },
    heroimage:{
      height:"auto",
      width:"100%",      
      [theme.breakpoints.down("xs")]: {
        marginTop:'5px',
       },
    }
  }));
  

function Home () {
    const classes = useStyles();
   return (
       <div>                       
      
            
           
              <img src={Header1} alt="Hero Image" className={classes.heroimage}/>
            <div class="typewriter">
  <h1>Let the Design Flow</h1>
</div>
            <Link to="./products">
            {/* <p className={classes.legend}  className="animate__animated animate__bounceInDown">Check out Products</p> */}
          </Link>
            
        
        
     </div>
     );
   }
  
 export default Home;

 