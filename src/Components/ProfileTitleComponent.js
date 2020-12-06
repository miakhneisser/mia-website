import React, { useState, useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, white, background } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Parallax } from 'react-scroll-parallax';
import imageProfile from '../images/mia-profile.jpg';

const loginWidth = 350;

const styles = theme => ({
    header: {
        width: '100%',
        top: '-45px',
        position: 'relative',
    },
    title: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    letter: {
      display: 'inline-block',
    },
    barTop: {
      width: '250px',
      height: '15px',
      borderTop: `0.45vh solid ${primaryColor}`,
      borderBottom: `0.45vh solid ${primaryColor}`,
      transform: 'skew(-10deg)',
      margin: '1vh 0',
    },
});

const ProfileTitleComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    const title = 'Profile'.split('');

    return (
        <Grid container className={classes.header} direction="column" alignItems="center">
          <Grid item className={classes.barTop} > </Grid>
          <Grid item className={`classes.title h1`} component="h1">
            {title.map((letter, i) => (
                <Parallax
                    key={`copy-${i}`}
                    x={[0 + 'px', 50 * (i - 3) + 'px']}
                    className={classes.letter}
                >
                    {letter}
                </Parallax>
            ))}
          </Grid >
          <Grid item className={classes.barTop} > </Grid>
        </Grid>
    );

}

export default withStyles(styles)(ProfileTitleComponent);
