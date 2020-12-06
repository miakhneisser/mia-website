import React, { useState, useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, white, background, textColor } from "../static/colors";
import ProfileTitleComponent from './ProfileTitleComponent';
import DescriptionBlocComponent from './DescriptionBlocComponent';
import DetailsBlocComponent from './DetailsBlocComponent';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Parallax } from 'react-scroll-parallax';
import Icon from '../Icon'


const styles = theme => ({
    doubleBoxTitle: {
      width: '230px',
      height: '90px',
      borderTop: `0.45vh solid ${primaryColor}`,
      borderRight: `0.45vh solid ${primaryColor}`,
      borderBottom: `0.45vh solid ${textColor}`,
      borderLeft: `0.45vh solid ${textColor}`,
      transform: 'skew(-20deg)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxTitle: {
      width: '200px',
      height: '60px',
      borderTop: `0.45vh solid ${primaryColor}`,
      borderRight: `0.45vh solid ${primaryColor}`,
      borderBottom: `0.45vh solid ${textColor}`,
      borderLeft: `0.45vh solid ${textColor}`,
      alignItems: 'center',
    },
});

const ExperienceTitleBlocComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    return (
        <Grid container className={classes.doubleBoxTitle}>
          <Grid container className={classes.boxTitle}>
            <Parallax
                className={classes.text}
                x={[30, -30]}
            >
                <span className="h1">Experiences</span>
            </Parallax>
          </Grid>
        </Grid>
    );

}

export default withStyles(styles)(ExperienceTitleBlocComponent);
