import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { background } from "../static/colors";
import ProjectsTitleBlocComponent from './ProjectsTitleBlocComponent';
import Example from './Example';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    container: {
        minHeight: '100vh',
        overflow: 'hidden',
        padding: '8vw',
    },
    projects: {
        width: '100%',
        marginTop: '8vh',
    },
});

const ProjectsTestBlocComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    return (
        <Grid container className={classes.container} direction="column" alignItems="center" justify="flex-start">
          <ProjectsTitleBlocComponent />
          <Grid container className={classes.projects} direction="row" justify="space-between">
            <Example />
          </Grid>


        </Grid>
    );

}

export default withStyles(styles)(ProjectsTestBlocComponent);
