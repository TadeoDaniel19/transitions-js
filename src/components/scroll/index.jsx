import * as React from "react";
import { motion, useMotionValue } from "framer-motion";
import { Item } from "./item.js";
//import { device } from "./settings.js";
import { Grid } from '@material-ui/core';
// Download the Framer Beta: https://www.framer.com/beta/
// Framer Beta API documentation: https://www.framer.com/api/

// Fill a grid of numbers to represent each app icon
const grid = new Array(10).fill([0, 1, 2, 3, 4, 5, 6, 7]);

export function AppleWatchDock() {
  // We manually create x/y motion values for the draggable plane as it allows us to pass these to
  // icon children, which can then listen to when they change and respond.
  // -220 is an arbitrary position that centers an initial icon - this could be calculated
  const x = useMotionValue(-225);
  const y = useMotionValue(-225);

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
        drag
        // These constraints could be calculated dynamically based on icon.size and grid length
        dragConstraints={{ left: -650, right: 50, top: -600, bottom: 50 }}
        style={{
          // Likewise these draggable plane dimensions could be calculated, but 1000x1000 is arbitrary and big

          width: 1000,
          height: 1000,
          x,
          y,
          background: "transparent"
        }}
      >
        {grid.map((rows, rowIndex) =>
          rows.map(colIndex => (
            <Item row={rowIndex} col={colIndex} planeX={x} planeY={y} />
          ))
        )}
      </motion.div>
    </Grid>
  );
}

export default AppleWatchDock;