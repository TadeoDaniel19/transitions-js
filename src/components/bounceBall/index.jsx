
import * as React from "react";
import { motion } from "framer-motion";
import { Grid, Typography } from '@material-ui/core';

export default function BouncingBall()  {
  const transitionValues = {
    duration: 1.8,
    yoyo: Infinity,
    ease: "easeOut"
  };

  const ballStyle = {
    backgroundColor: 'red',
    borderRadius: '50px',
    color: 'white',
    textAlign: 'center',
    fontSize: '15px',
    height: '120px',
    lineHeight: '120px',
    width: '220px',
    margin: '5px',
  };

  return (
    <Grid 
    style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    container 
    justify="space-evenly" 
    direction="row">
    <motion.Button
      style={ballStyle}
      transition={{
        y: transitionValues,
        width: transitionValues,
        height: transitionValues
      }}
      animate={{
        y: ["1rem", "5rem", "8rem"],
        width: ["5rem", "5rem", "6rem"],
        height: ["5rem", "5rem", "4rem"]
      }}
    >
      <Typography variant="subtitle2"> Pelota </Typography>
    </motion.Button>
    </Grid>
  );
};

