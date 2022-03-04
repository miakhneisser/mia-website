import { withStyles } from "@material-ui/core/styles";
import { textColor, textLightColor, background, backgroundLightColor } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    container: {
        padding: '25px',
        background: background,
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
      margin: '0!important',
      '&::after': {
        display: 'none',
      }
    },
    description: {
      whiteSpace: 'pre-line',
      marginBottom: '25px',
    },
    techno: {
      fontWeight: 'bold',
      color: textColor,
      background: backgroundLightColor,
      borderRadius: '20px',
      padding: '4px 10px',
      marginRight: '6px!important',
    },
});

const ProjectContentBlocComponent = (props) => {
    const { classes } = props;
    const { type, name, period, description, techno } = props;

    return (
          <Grid container className={classes.global} direction="column">
            <Typography item className={classes.period}> {period} | {type}</Typography>
            <Grid container className={classes.container} direction="column">
              <Typography item className={classes.name} component="h2"> {name} </Typography>
              <Typography item className={classes.description}> {description} </Typography>
              <Grid container direction="row">
                {
                  techno.length > 0 ? techno.map(row =>
                      <Typography item className={classes.techno}> {row} </Typography>
                  ):
                  <br/>
                }
              </Grid>
            </Grid>
          </Grid>
    );

}

export default withStyles(styles)(ProjectContentBlocComponent);
