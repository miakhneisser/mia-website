import React, { useState, useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, white, textColor } from "../static/colors";
import DescriptionItemComponent from './DescriptionItemComponent';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Parallax } from 'react-scroll-parallax';
import imageProfile from '../images/mia-profile.jpg';

const loginWidth = 350;

const styles = theme => ({
    infos: {
        marginBottom: '1vh',
    },
    labelTitle: {
        color: textColor,
        fontWeight: 'bold',
        '&::after': {
          content: `':'`,
          marginRight: '8px',
        }
    },
    labelValue: {
        color: textColor,
    },
});

const DetailsBlocComponent = (props) => {
    const { classes } = props;
    const {title, value} = props;

    return (
          <Grid container className={classes.infos} direction="row">
            <Typography item className={classes.labelTitle} component="h2"> {title} </Typography>
            <Typography item className={classes.labelValue} component="h2"> {value} </Typography>
          </Grid>
    );

}

export default withStyles(styles)(DetailsBlocComponent);
