import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, background, textLightColor } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Parallax } from 'react-scroll-parallax';
import Icon from '../Icon'


const styles = theme => ({
    title: {
      width: '29vw',
      minWidth: '230px',
      height: '90px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dottedTriangleFirst: {
      transform: 'rotateY(180deg)',
    },
    textTitle: {
      position: 'absolute',
      zIndex: 1,
    },
});

const ProjectsTitleBlocComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    return (
        <Grid container direction="column" className={classes.title}>
          <Parallax
              className={classes.text}
              x={[-140, 5]}
          >
            <Icon className={classes.dottedTriangleFirst} name="dotted-triangle" color={primaryColor} size={90} />
          </Parallax>
          <span className={`h1 ${classes.textTitle}`}>Projects</span>
          <Parallax
              className={classes.text}
              x={[140, -15]}
          >
            <Icon className={classes.dottedTriangle} name="dotted-triangle" color={textLightColor} size={90} />
          </Parallax>
        </Grid>
    );

}

export default withStyles(styles)(ProjectsTitleBlocComponent);
