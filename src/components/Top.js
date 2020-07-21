import React from 'react'
import { Grid } from '@material-ui/core'
import Logo from './../assets/logo.svg'
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
        <div style={{height:'8rem', backgroundColor:'#fafafa'}} className={classes.top}>
         <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item  md={2} lg={2} xl={2} align="center" justify="center" 
          style={{verticalAlign:'center'}}
          className="animate__animated animate__jackInTheBox" >
              {/* <img src={Logo} alt="" height="120px" style={{padding:'5px'}}/> */}
              </Grid>
              <Grid item  md={8} lg={8}xl={8} align="center"  className="animate__animated animate__jackInTheBox" ></Grid>
              <Grid item md={2} lg={2}xl={2} align="center"  justify="center" className="animate__animated animate__jackInTheBox" >
              {/* <p style={{fontSize:'25px'}}>Login &nbsp;&nbsp;&nbsp;Shop (0)</p> */}
              </Grid>
              </Grid>
         </div>
    )
}
