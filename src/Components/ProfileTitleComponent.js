import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, background } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Parallax } from 'react-scroll-parallax';

const styles = theme => ({
    header: {
        width: '100%',
        top: '-20px',
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
