import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./../App.css";
import Con from './../assets/contact.jpg'

const useStyles = makeStyles((theme) => ({
  
  pageContent: {
    padding: "30px",
    fontSize: "18px",
  },
  img: {
    height:'auto',
    width:'500px',
    [theme.breakpoints.down("sm")]: {
      width:'340px',
      marginTop:'100px'
    },  
},
 
}));

export default function Product() {
  const classes = useStyles();

  return (
    <Grid>        
      <Container maxWidth="md" style={{minHeight:'63vh'}}>       
        <div align="center">
          <img src={Con} className={classes.img}/>
          <br></br>
                <a
                  href="https://www.instagram.com/letthedesignflow"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <InstagramIcon fontSize="large" />
                </a>
                <a
                  href="https://www.facebook.com/letthedesignflow"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  {" "}
                  <FacebookIcon fontSize="large" />
                </a>

                <a
                  href="mailto:letthedesignflow@gmail.com"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  {" "}
                  <EmailIcon fontSize="large" />
                </a>
              </div>
        
      </Container>

       
    </Grid>
  );
}
