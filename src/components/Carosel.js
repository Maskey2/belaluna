import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header1 from '../assets/Header1.jpg'
import Header2 from '../assets/Header2.jpg'
import Header3 from '../assets/Header3.jpg' 
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
      right: "42%",
      top: "83%",
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
  
const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  // top: 'calc(50% - 15px)',
  top: '5%',
  width: '3%',
  height: '100%',
  color:'grey',
  cursor: 'pointer',
  '&hover':{
    top:0,
    bottom:0,
    backgroundColor:'lightgrey',
    opacity:'.4',
    
  }
 
};
function Home () {
    const classes = useStyles();
   return (
       <div>                       
       <Carousel 
       autoPlay
        transitionTime={2500}
        interval={6000}
        infiniteLoop
        showThumbs={false}
        showStatus={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
                     <ArrowBackIosIcon onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15, }}/>
          )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (        
                  <ArrowForwardIosIcon onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}/>
          )
      }>  
            
            <div><img src={Header1} alt="" />
            <Link to="./customers">
            <p className={classes.legend}>See the Demo</p>
          </Link></div>
             <div><img src={Header2} alt=""/>
             <Link to="./products">
            <p className={classes.legend}>See the options</p>
          </Link></div>
            <div><img src={Header3} alt=""/>
            <Link to="./contact">
            <p className={classes.legend}>Contact Us</p>
          </Link></div> 
       </Carousel>   
        
     </div>
     );
   }
  
 export default Home;

 