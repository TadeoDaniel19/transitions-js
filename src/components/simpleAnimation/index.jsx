import React from "react";
import { motion } from "framer-motion";
import { Grid } from '@material-ui/core';

const ballStyle = {
  display: "block",
  width: "10rem",
  height: "22rem",
  backgroundColor: "red",
  borderRadius: "10rem"
};

const bounceTransition = {
  y: {
    duration: 3.8,
    yoyo: Infinity,
    ease: "easeOut"
  },
  x: {
    duration: 1.2,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8
  }
};

export default function Simple() {
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
      <motion.button
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["185%", "-78%"],
          x: ["145%", "-56%"],
          backgroundColor: ["red", "green"]
        }}
      />
    </Grid>
  );
}
