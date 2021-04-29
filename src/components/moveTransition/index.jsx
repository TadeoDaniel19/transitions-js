import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Grid } from '@material-ui/core';
import "./styles.css";

const DragWithMotionValue = () => {
  const sliderXVal = useMotionValue(0);
  const [xVal, setXVal] = useState(0);

  useEffect(
    () =>
      sliderXVal.onChange(() => {
        setXVal(sliderXVal.get());
      }),
    [sliderXVal]
  );

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
      <div className="motion-square">
        <motion.div
          className="square orange"
          animate={{
            x: xVal,
            rotate: (180 / 100) * xVal,
            scale: xVal / 300 + 1
          }}
        />
      </div>
      <div className="drag-constraint">
        <motion.div
          className="square blue"
          whileHover={{ scale: 1.1 }}
          drag="x"
          style={{ x: sliderXVal }}
          dragConstraints={{ left: -145, right: 145 }}
          dragElastic={0}
        />
      </div>
    </Grid>
  );
};

export default DragWithMotionValue
