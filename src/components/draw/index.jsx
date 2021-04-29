import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Grid } from '@material-ui/core';

const Draw = () => {
  const constraintsRef = useRef(null);

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
      <motion.div className="container" ref={constraintsRef}>
        <motion.div className="item" drag dragConstraints={constraintsRef} />
      </motion.div>
    </Grid>
  );
};

export default Draw;
