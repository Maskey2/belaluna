import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


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
        
      <Container maxWidth="md" component="main" >
        <Typography component="h2" align="center" className={classes.pagetitle} >
          Customer's Feedback
        </Typography>
        <Typography component="h2" align="center" className={classes.pagesubtitle}>
         Here's our happy customers!
        </Typography>
        <hr/>
      </Container>

       
    </Grid>
  );
}
