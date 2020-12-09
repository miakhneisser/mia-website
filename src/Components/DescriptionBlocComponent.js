import { withStyles } from "@material-ui/core/styles";
import { primaryColor, textColor } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    header: {
        flex: '1',
        minWidth: '220px',
    },
    descriptionTitle: {
        color: primaryColor,
        fontSize: '2.5vh',
        justifyContent: 'flex-end',
        display: 'flex',
        width: '100%',
    },
    description: {
        color: textColor,
        textAlign: 'justify',
    },
});

const DescriptionBlocComponent = (props) => {
    const { classes } = props;

    return (
          <Grid container className={classes.header} direction="column" alignItems="center">

                    <Typography item xs className={classes.descriptionTitle} component="h2"> About me </Typography>
                    <Typography item xs className={classes.description} >
                    I am a software engineer with 2 years of experince. Being passionate about big data, I decided to persue my education at Telecom ParisTech where I got my master degree in this domain in 2018. <br/><br/>
                    I am passionate about sport and I practiced high level Badminton for a long time which taught me teamwork and perseverance. I always try to create a culture of exchange and sharing knowledge within the teams in which I work. <br/><br/>
                    Finally, I consider myself to be an ambitious person who is always looking to improve and discover new technologies and new ways of doing things.
                    </Typography>


          </Grid>
    );

}

export default withStyles(styles)(DescriptionBlocComponent);
