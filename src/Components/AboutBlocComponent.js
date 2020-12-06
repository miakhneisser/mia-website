import React, { useState, useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, white, background } from "../static/colors";
import ProfileTitleComponent from './ProfileTitleComponent';
import DescriptionBlocComponent from './DescriptionBlocComponent';
import DetailsBlocComponent from './DetailsBlocComponent';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Parallax } from 'react-scroll-parallax';
import imageProfile from '../images/mia-profile.jpg';

const loginWidth = 350;

const styles = theme => ({
    container: {
        minHeight: '100vh',
        overflow: 'hidden',
        padding: '6vh',
        justifyContent: 'space-around',
    },
    content: {
      justifyContent: 'space-around',
    },
    imgProfile: {
      width: '22vw',
      height: '22vw',
      objectFit: 'cover',
      borderRadius: '50%',
    },
    imageBloc: {
      flex: '1',
      minWidth: '220px',
      justifyContent: 'center',
      display: 'flex',
    },
});

const AboutBlocComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    return (
        <Grid container className={classes.container} direction="column" alignItems="center" justify="flex-start">

          <ProfileTitleComponent />

          <Parallax
                className={classes.imgBloc}
                y={[10, -40]}
                >

            <Grid container className={classes.content}
                direction="row">

                <DescriptionBlocComponent />

                <Grid item className={classes.imageBloc}>
                  <img className={classes.imgProfile} src={imageProfile} alt="profile-image" />
                </Grid>

                <DetailsBlocComponent />

            </Grid>
          </Parallax>




        </Grid>
    );

}

export default withStyles(styles)(AboutBlocComponent);
