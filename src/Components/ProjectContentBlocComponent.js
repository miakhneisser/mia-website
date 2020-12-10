import { withStyles } from "@material-ui/core/styles";
import { primaryColor, textColor, textLightColor } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    container: {
        width: '35vw',
        minWidth: '315px',
        maxWidth: '600px',
        border: `3px solid ${primaryColor}`,
        padding: '25px',
        marginBottom: '4vh',
        borderRadius: '10px',
        position: 'relative',
    },
    name: {
        fontWeight: 'bold',
        color: textColor,
        fontSize: 'x-large',
        marginTop: '-10px',
    },
    type: {
      fontWeight: 'bold',
      color: textLightColor,
      paddingBottom: '6px',
    },
    period: {
      color: textLightColor,
    },
    description: {
      whiteSpace: 'pre-line',
      textAlign: 'justify',
      marginBottom: '50px',
    },
    techno: {
      fontWeight: 'bold',
      color: textColor,
      position: 'absolute',
      bottom: '25px',
      width: 'calc(100% - 50px)',
    },
});

const ProjectContentBlocComponent = (props) => {
    const { classes } = props;
    const { type, name, period, description, techno } = props;

    return (
          <Grid container className={classes.container} direction="column">
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Typography item className={classes.name} component="h2"> {name} </Typography>
              <Typography item className={classes.type} component="h2"> {type} </Typography>
            </Grid>
            <Typography item className={classes.period} component="h2"> {period} </Typography>
            <Typography item className={classes.description} component="h2"> {description} </Typography>
            <Typography item className={classes.techno} component="h2"> {techno.join(', ')} </Typography>
          </Grid>
    );

}

export default withStyles(styles)(ProjectContentBlocComponent);
