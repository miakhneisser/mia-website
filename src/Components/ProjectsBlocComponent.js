import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { background, primaryColor, backgroundLightColor } from "../static/colors";
import ProjectsTitleBlocComponent from './ProjectsTitleBlocComponent';
import ProjectContentBlocComponent from './ProjectContentBlocComponent';
import Grid from "@material-ui/core/Grid";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Icon from '../Icon'
import 'react-vertical-timeline-component/style.min.css';

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
    hideDateDefault: {
      display: 'none!important',
    }
});

const projects = [{type: 'Side project', name: 'Boursonmic', iconName: 'stock-exchange', period: '02/2020 - Present', description: 'Boursonomic project will allow each user to track their investments: the user will have the possibility to see the performance of their funds, how much money they gained or lost and even follow the news related to topics they\'re interested in.', techno: ['React.js', 'CSS', 'JavaScript', 'Python', 'flask', 'MongoDB', 'InfluxDB', 'Docker']},
            {type: 'Academic project', name: 'CFA Bot', iconName:'robot', period: '11/2017 - 06/2018', description: 'Built a bot that can answer the Chartered Financial Analyst quiz (CFA):\n• Document retrieval: finding the relevant source of information\n• Document reader: identifying the answer spans from those documents (Natural Language Processing)\n• Choice selector: select the correct answer from the all the choices', techno: ['Python', 'scikit-learn', 'spaCy']},
            {type: 'Academic project', name: 'Recycle Bin', iconName:'bin', period: '10/2015 - 04/2016', description: '“Recycle Bin” project is a smart bin, controlled by a Raspberry Pi, that recognizes the type of trash and sorts them in their corresponding container using Machine Learning, in addition to sending information on the cloud (Azure) about its content and displaying them in a beautiful responsive web application.', techno: ['Java', 'Azure', 'JavaScript', 'html', 'CSS']}]

const ProjectsBlocComponent = (props) => {
    const { classes } = props;

    useEffect(() => {
        document.body.style.backgroundColor = background;
    });

    return (
        <Grid container className={classes.container} direction="column" alignItems="center" justify="flex-start">
          <ProjectsTitleBlocComponent />
          <Grid container className={classes.projects} direction="row" justify="space-between">

            <VerticalTimeline
              layout={'1-column-left'}
              lineColor={backgroundLightColor}
            >
              {
                projects.length > 0 ? projects.map(row =>
                  <VerticalTimelineElement
                    dateClassName={classes.hideDateDefault}
                    contentStyle={{WebkitBoxShadow: 'none', boxShadow: 'none', border: `2px solid ${primaryColor}`}}
                    contentArrowStyle={{ borderRight: `10px solid  ${primaryColor}` }}
                    iconStyle={{ background: primaryColor, WebkitBoxShadow: 'none', boxShadow: 'none'}}
                    icon={<Icon className={classes.dottedTriangleFirst} name={row.iconName} color={background} size={90} />}
                  >
                    <ProjectContentBlocComponent type={row.type} name={row.name} techno={row.techno} period={row.period} description={row.description}/>
                  </VerticalTimelineElement>
                ):
                <br/>
              }
            </VerticalTimeline>
          </Grid>

        </Grid>
    );

}

export default withStyles(styles)(ProjectsBlocComponent);
