import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Grid } from '@material-ui/core';
import './styles.css';

function Switch({ isOn, ...props }) {
  const className = `switch ${isOn ? "on" : "off"}`;

  return (
    <motion.div animate className={className} {...props}>
      <motion.div animate />
    </motion.div>
  );
}

export default function SwitchButton() {
  const [isOn, setIsOn] = useState(false);

  return(
    <Grid 
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      container justify="space-evenly" 
      direction="row">
       <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />
    </Grid>
  )
}
