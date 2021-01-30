import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from 'react-responsive-carousel';
import Header1 from '../assets/header.jpg'
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
  }));
  

function Home () {
    const classes = useStyles();
   return (
       <div>                       
      
            
            <div  className="animate__animated animate__fadeIn "><img src={Header1} alt="" style={{height:'auto', width:'100%'}}/>
            <Link to="./products">
            {/* <p className={classes.legend}  className="animate__animated animate__bounceInDown">Check out Products</p> */}
          </Link></div>
            
        
        
     </div>
     );
   }
  
 export default Home;

 