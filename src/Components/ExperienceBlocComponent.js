import React, { useState, useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, white, background, textColor } from "../static/colors";
import ProfileTitleComponent from './ProfileTitleComponent';
import DescriptionBlocComponent from './DescriptionBlocComponent';
import ExperienceTitleBlocComponent from './ExperienceTitleBlocComponent';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Parallax } from 'react-scroll-parallax';
import Icon from '../Icon'

const loginWidth = 350;

const styles = theme => ({
    container: {
        minHeight: '100vh',
        overflow: 'hidden',
        padding: '6vh',
    },
});

const ExperienceBlocComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    return (
        <Grid container className={classes.container} direction="column" alignItems="center" justify="flex-start">
          <ExperienceTitleBlocComponent />
        </Grid>
    );

}

export default withStyles(styles)(ExperienceBlocComponent);
