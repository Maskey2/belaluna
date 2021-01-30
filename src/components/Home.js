import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./../App.css";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import Carousel from "./Carosel";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "220px",
    maxWidth: "300px",
    padding: "15px",
    margin: "1px",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "280px",
    [theme.breakpoints.down("sm")]: {
      height: "140px",
    },
  },
  title: {
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
      <Carousel />
      <Container className={classes.cardGrid} maxWidth="xl" style={{backgroundColor:'#fafafa'}}>
        {/* End hero unit */}
        <Grid
          container
          spacing={0}
          style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            align="center"
            className="animate__animated animate__jackInTheBox"
          >
            <img
              src="https://d2ct9xspam8wud.cloudfront.net/blog/2019/07/25140723/Design_elements.png"
              alt=""
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p
              align="center"
              style={{ fontSize: "50px" }}
              className="animate__animated animate__zoomIn"
            >
              Bella Luna
            </p>
            <Typography className="animate__animated animate__fadeInDown animate__delay-1s">
              <h3 align="center">
                We are  are here to
                provide you with the best Custom Projects.<br/>
              </h3>

              <div align="center">
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
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div style={{ backgroundColor: "#e4e4e4" }}>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid
            container
            spacing={4}
            style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <p
                align="center"
                style={{ fontSize: "50px" }}
                className="animate__animated animate__zoomIn"
              >
                What we do
              </p>
              <Typography className="animate__animated animate__fadeInDown animate__delay-1s">
                
                <p>
                  Have a design needed printed on a shirt, cups, stickers or need
                  help with the design itself? Reach out to us!
                </p>
              </Typography>
            </Grid>
            <Grid     item  xs={12} sm={12} md={6} lg={6} align="center" className="animate__animated animate__jackInTheBox"    >
              <img
                src="https://miro.medium.com/max/1170/0*XXHFZiL1N1fHWaPW.jpg"
                alt=""
                className={classes.img}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
