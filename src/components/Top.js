import React from 'react'
import { Grid } from '@material-ui/core'

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  top:{

  display:'flex',
      [theme.breakpoints.down("md")]: {
        display: "none", 
      },
      
    },
   
  }));
export default function Top() {
    
  const classes = useStyles();
    return (
        <div style={{height:'6rem', backgroundColor:'#fafafa'}} className={classes.top}>
         <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item  md={2} lg={2} xl={2} align="center" justify="center" 
          style={{verticalAlign:'center'}}
          className="animate__animated animate__jackInTheBox" >
              <p style={{fontSize:'40px'}}>LD</p>
              </Grid>
              <Grid item  md={8} lg={8}xl={8} align="center"  className="animate__animated animate__jackInTheBox" ></Grid>
              <Grid item md={2} lg={2}xl={2} align="center"  justify="center" className="animate__animated animate__jackInTheBox" >
              <p style={{fontSize:'25px'}}>Login</p>
              </Grid>
              </Grid>
         </div>
    )
}
