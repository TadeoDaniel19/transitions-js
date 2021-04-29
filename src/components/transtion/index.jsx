import React from "react";
import { motion } from "framer-motion";
import { Grid } from '@material-ui/core';
import "./styles.css";

const SimpleTranslation = () => {
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
      <motion.div
        className="square"
        animate={{ x: [0, 100, 0, -100, 0], rotate: 360 }}
        transition={{ duration: 3, loop: Infinity, ease: "linear" }}
      />
    </Grid>
  );
};
export default SimpleTranslation;

