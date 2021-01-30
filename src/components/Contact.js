import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./../App.css";

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
 
}));

export default function Product() {
  const classes = useStyles();

  return (
    <Grid>
        
      <Container maxWidth="md" style={{minHeight:'63vh'}}>
        <Typography component="h2" align="center" className={classes.pagetitle} >
          Contact
        </Typography>
        <div align="center">
          <img src="https://media.tenor.com/images/c9e5b501a5cec16a1de208f59c19ac2f/tenor.gif"/>
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
        <hr/>
      </Container>

       
    </Grid>
  );
}
