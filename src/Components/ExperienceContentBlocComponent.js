import { withStyles } from "@material-ui/core/styles";
import { primaryColor, white, textColor, textLightColor } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    container: {
        margin: '2vh 0 1vh',
        paddingLeft: '40px',
        width: '35vw',
        minWidth: '290px',
        position: 'relative',
        '&::before': {
          content: `''`,
          position: 'absolute',
          left: '0',
          width: '12px',
          height: '12px',
          border: `3px solid ${primaryColor}`,
          background: white,
          borderRadius: '9px',
        },
        '&::after': {
          content: `''`,
          position: 'absolute',
          left: '7px',
          width: '3px',
          height: 'calc(100% + 28px)',
          background: primaryColor,
          zIndex: '-1',
        },
    },
    position: {
      fontWeight: 'bold',
      color: textColor,
      fontSize: 'x-large',
      marginTop: '-10px',
    },
    company_period: {
      color: textLightColor,
    },
});

const ExperienceContentBlocComponent = (props) => {
    const { classes } = props;
    const { period, position, company, description } = props;

    return (
          <Grid container className={classes.container} direction="column">
            <Typography item className={classes.position} component="h2"> {position} </Typography>
            <Typography item className={classes.company_period} component="h2"> {company} | {period} </Typography>
            {
              description ?
              <Typography item className={classes.description} component="h2"> {description} </Typography>
              : null
            }
          </Grid>
    );

}

export default withStyles(styles)(ExperienceContentBlocComponent);
