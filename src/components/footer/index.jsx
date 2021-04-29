import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((Theme) =>
  createStyles({
    footer: {
      textAalign: 'center',
      color: 'white',
      position: 'absolute',
      bottom: '0',
      width: '100% !important',
      height: '30px !important',
      background: 'black',
    }
  }),
);

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} container className={classes.footer} justify="space-evenly" direction="row">
      <Typography variant="body2" className={classes.title}>
        © Copyright
        {' '}
        {new Date().getFullYear()}
        . Verónica Pavana Lara 
      </Typography>
  </Grid>
  )
};

export default Footer;
