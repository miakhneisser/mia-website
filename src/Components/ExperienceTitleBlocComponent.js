import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, background, textColor } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Parallax } from 'react-scroll-parallax';


const styles = theme => ({
    doubleBoxTitle: {
      width: '29vw',
      minWidth: '230px',
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
      width: '26vw',
      minWidth: '200px',
      height: '60px',
      borderTop: `0.45vh solid ${primaryColor}`,
      borderRight: `0.45vh solid ${primaryColor}`,
      borderBottom: `0.45vh solid ${textColor}`,
      borderLeft: `0.45vh solid ${textColor}`,
      alignItems: 'center',
      overflow: 'hidden',
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
                x={[140, -5]}
            >
                <span className="h1">Career</span>
            </Parallax>
          </Grid>
        </Grid>
    );

}

export default withStyles(styles)(ExperienceTitleBlocComponent);
