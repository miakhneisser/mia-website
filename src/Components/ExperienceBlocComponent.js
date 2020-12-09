import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, background } from "../static/colors";
import ExperienceTitleBlocComponent from './ExperienceTitleBlocComponent';
import ExperienceContentBlocComponent from './ExperienceContentBlocComponent';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    container: {
        minHeight: '100vh',
        overflow: 'hidden',
        padding: '8vw',
    },
    experiencesEducationBloc: {
        width: '100%',
        marginTop: '4vh',
    },
    title: {
        fontWeight: 'bold',
        color: primaryColor,
        fontSize: 'xx-large',
    },
    blocs: {
        width: 'auto',
        paddingTop: '4vh',
    },
});

const experiences = [{position: 'Full Stack Engineer | Data Scientist', company: 'NeoXam - Paris, France', period: '02/2019 - Present', description: 'Create dashboards that help clients monitor their funds and generate reports automatically.'},
                     {position: 'Full Stack Engineer | Side project', company: 'Boursonomic - Paris, France', period: '02/2020 - Present', description: 'Boursonomic project will allow each user to track their investments: the user will have the possibility to see the performance of their funds, how much money they gained or lost and even follow the news related to topics they\'re interested in.'},
                     {position: 'Data Scientist', company: 'AXA France - Paris, France', period: '07/2018 - 12/2018', description: 'Created a model to optimize the purchase of leads.\nCreated a named entity corpus in French based on Wikipedia’s articles.'},
                     {position: 'Internship', company: 'Haute Ecole d’ingénieurie et d’architectes de Fribourg – Freiburg, Switzerland', period: '07/2016 - 09/2016', description: 'Modified the library webRTC and added functionalities to the project.'}]

const educations = [{position: 'Specialized Master in Big Data', company: 'Télécom ParisTech - Paris, France', period: '2017 - 2018'},
                    {position: 'Software Engineer', company: 'Saint Joseph University - Beirut, Lebanon', period: '2012 - 2017'}]

const ExperienceBlocComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    return (
        <Grid container className={classes.container} direction="column" alignItems="center" justify="flex-start">
          <ExperienceTitleBlocComponent />
          <Grid container className={classes.experiencesEducationBloc} direction="row" justify="space-between">
            <Grid container className={classes.blocs} direction="column" >
              <Typography item className={classes.title} component="h2"> experience </Typography>
              {
                experiences.length > 0 ? experiences.map(row =>
                <ExperienceContentBlocComponent period={row.period} position={row.position} company={row.company} description={row.description}/>
                ):
                <br/>
              }
            </Grid>
            <Grid container className={classes.blocs} direction="column" >
              <Typography item className={classes.title} component="h2"> education </Typography>
              {
                educations.length > 0 ? educations.map(row =>
                <ExperienceContentBlocComponent period={row.period} position={row.position} company={row.company}/>
                ):
                <br/>
              }
            </Grid>
          </Grid>

        </Grid>
    );

}

export default withStyles(styles)(ExperienceBlocComponent);
