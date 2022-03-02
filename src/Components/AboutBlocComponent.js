import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { background } from "../static/colors";
import ProfileTitleComponent from './ProfileTitleComponent';
import DescriptionBlocComponent from './DescriptionBlocComponent';
import DetailsBlocComponent from './DetailsBlocComponent';
import Grid from "@material-ui/core/Grid";
import { Parallax } from 'react-scroll-parallax';
import imageProfile from '../images/mia-profile.jpg';

const styles = theme => ({
    container: {
        minHeight: '100vh',
        overflow: 'hidden',
        padding: '8vw',
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
                y={[10, -20]}
                >

            <Grid container className={classes.content}
                direction="row">

                <DescriptionBlocComponent />

                <Grid item className={classes.imageBloc}>
                  <img className={classes.imgProfile} src={imageProfile} alt="profile" />
                </Grid>

                <DetailsBlocComponent />

            </Grid>
          </Parallax>




        </Grid>
    );

}

export default withStyles(styles)(AboutBlocComponent);
