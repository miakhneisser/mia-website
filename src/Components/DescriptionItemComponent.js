import { withStyles } from "@material-ui/core/styles";
import { textColor } from "../static/colors";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    infos: {
        marginBottom: '1vh',
    },
    labelTitle: {
        color: textColor,
        fontWeight: 'bold',
        '&::after': {
          content: `':'`,
          marginRight: '8px',
        }
    },
    labelValue: {
        color: textColor,
    },
});

const DetailsBlocComponent = (props) => {
    const { classes } = props;
    const {title, value} = props;

    return (
          <Grid container className={classes.infos} direction="row">
            <Typography item className={classes.labelTitle} component="h2"> {title} </Typography>
            <Typography item className={classes.labelValue} component="h2"> {value} </Typography>
          </Grid>
    );

}

export default withStyles(styles)(DetailsBlocComponent);
