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

const projects = [{type: 'Side project', name: 'Boursonmic', period: '02/2020 - Present', description: 'Boursonomic project will allow each user to track their investments: the user will have the possibility to see the performance of their funds, how much money they gained or lost and even follow the news related to topics they\'re interested in.', techno: ['React.js', 'CSS', 'JavaScript', 'Python', 'flask', 'MongoDB', 'InfluxDB', 'Docker']},
                  {type: 'Academic project', name: 'CFA Bot', period: '11/2017 - 06/2018', description: 'Built a bot that can answer the Chartered Financial Analyst quiz (CFA):\n• Document retrieval: finding the relevant source of information\n• Document reader: identifying the answer spans from those documents (Natural Language Processing)\n• Choice selector: select the correct answer from the all the choices', techno: ['Python', 'scikit-learn', 'spaCy']},
                  {type: 'Academic project', name: 'Recycle Bin', period: '10/2015 - 04/2016', description: '“Recycle Bin” project is a smart bin, controlled by a Raspberry Pi, that recognizes the type of trash and sorts them in their corresponding container using Machine Learning, in addition to sending information on the cloud (Azure) about its content and displaying them in a beautiful responsive web application.', techno: ['Java', 'Azure', 'JavaScript', 'html', 'CSS']}]

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
