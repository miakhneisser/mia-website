import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { background } from "../static/colors";
import ProjectsTitleBlocComponent from './ProjectsTitleBlocComponent';
import ProjectContentBlocComponent from './ProjectContentBlocComponent';
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

const ProjectsBlocComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    return (
        <Grid container className={classes.container} direction="column" alignItems="center" justify="flex-start">
          <ProjectsTitleBlocComponent />
          <Grid container className={classes.projects} direction="row" justify="space-between">

            {
              projects.length > 0 ? projects.map(row =>
              <ProjectContentBlocComponent type={row.type} name={row.name} period={row.period} techno={row.techno} description={row.description}/>
              ):
              <br/>
            }
          </Grid>

        </Grid>
    );

}

export default withStyles(styles)(ProjectsBlocComponent);
