import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Box } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function Copyright() {
  return (
    <Typography component={"span"} variant="body2" style={{ color: "#e4e4e4" }}>
      <Box display={{ xs: "block", sm: "none" }}>
        <br />
      </Box>
      {"Copyright ©     "}
      Bela Luna {" "}
      {new Date().getFullYear()}
      
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footer: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  headerlink: {
    textDecoration: "none",
    color:'white',
    fontSize: "25px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    lineHeight: "1.5",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  textfield: {
    margin: "5px",
    backgroundColor: "white",
    color: "#213C54",
    borderRadius: "20px",
    paddingLeft: "8px",
  },
  signup: {
    border: "2px solid white",
    padding: "4px",
    margin: "3px",
  },
  icon:{
    color:'white'
  }
}));

const handleClick = (event) => {
  scroll.scrollToTop();
};

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid style={{ backgroundColor: "#438c9c"}}>
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3} md={4} lg={4}>
            <Typography component={"span"} className={classes.headerlink}>
              Bella Luna
            </Typography>
            <ul>
              <Link
                to="/"
                className={classes.link}
                onClick={handleClick}
              >
                <li>Dashboard </li>
              </Link>
              <a href="/about" className={classes.link}>
                <li>About </li>{" "}
              </a>
              
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} md={4} lg={4}>
            <Typography
              component={"span"}
              gutterBottom
              className={classes.headerlink}
            ></Typography>
            <ul>
            <Link to="/products" className={classes.link}>
                <li>Designs </li>
              </Link>
              <Link to="/customer" className={classes.link}>
                <li>Customers </li>
              </Link>             
              {/* <Link to="/privacy" className={classes.link}>
                <li>Privacy Policy </li>
              </Link>
              <Link to="/terms" className={classes.link}>
                <li>Terms and Conditions </li>
              </Link>               */}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography
              component="h2"
              className={classes.headerlink}
              style={{ paddingBottom: "5px", fontSize: "26px" }}
            >
              {" "}
              C O N T A C T M E{" "}
            </Typography>

            <div>
              <a
                href="https://www.instagram.com/letthedesignflow"
                target="_blank"
                style={{ color: "black" }}
              >
                <InstagramIcon fontSize="large" className={classes.icon}/>
              </a>
              <a
                href="https://www.facebook.com/letthedesignflow"
                target="_blank"
                style={{ color: "black" }}
              >
                {" "}
                <FacebookIcon fontSize="large" className={classes.icon}/>
              </a>
              <a
                href="mailto:letthedesignflow@gmail.com"
                target="_blank"
                style={{ color: "black" }}
              >
                {" "}
                <EmailIcon fontSize="large" className={classes.icon}/>
              </a>
              
            </div>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        <Grid style={{ paddingBottom: "30px" }}></Grid>
      </Container>
    </Grid>
  );
}
