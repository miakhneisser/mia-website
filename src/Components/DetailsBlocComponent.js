import { withStyles } from "@material-ui/core/styles";
import { primaryColor } from "../static/colors";
import DescriptionItemComponent from './DescriptionItemComponent';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Icon from '../Icon'

const styles = theme => ({
    header: {
      flex: '1',
      minWidth: '220px',
    },
    descriptionTitle: {
        color: primaryColor,
        fontSize: '2.5vh',
        justifyContent: 'flex-start',
        display: 'flex',
        width: '100%',
    },
    buttons: {
        alignItems: 'center',
    },
    icons: {
        marginRight: '2vw',
    },
    downloadCV: {
        color: primaryColor,
        width: 'unset',
    },
    downloadCVLink: {
      textDecoration: 'none',
      color: 'inherit',
      justifyContent: 'center',
      display: 'flex',
      fontWeight: 'bold',
    },
    link: {
      justifyContent: 'center',
      display: 'flex',
      cursor: 'pointer',
    },
});

const DescriptionBlocComponent = (props) => {
    const { classes } = props;

    return (
          <Grid container className={classes.header} direction="column" alignItems="center">

                    <Typography item xs className={classes.descriptionTitle} component="h2"> Details </Typography>
                    <DescriptionItemComponent title="Name" value="Mia Nasr Khneisser" />
                    <DescriptionItemComponent title="Age" value="26 years" />
                    <DescriptionItemComponent title="Location" value="Paris, France" />
                    <DescriptionItemComponent title="Number" value="(+33) 7 67 43 60 84" />
                    <Grid container className={classes.buttons} direction="row">
                      <a className={classes.link} href="https://www.linkedin.com/in/mia-nasr-khneisser/" rel="noreferrer" target="_blank"> <Icon className={`${classes.icons} ${classes.linkedin}`} name="linkedin" color={primaryColor} size={25} /> </a>
                      <a className={classes.link} href="https://github.com/miakhneisser" rel="noreferrer" target="_blank"> <Icon className={`${classes.icons} ${classes.github}`} name="github" color={primaryColor} size={25} /> </a>
                      <a className={classes.link} href = "mailto: mia.g.kh@gmail.com"> <Icon className={`${classes.icons} ${classes.email}`} name="email" color={primaryColor} size={25} /> </a>
                      <Grid item className={classes.downloadCV} >
                        <a href="/NASR_KHNEISSER_Mia_CV.pdf" download className={classes.downloadCVLink}>
                          <Icon className={classes.download} name="download" color={primaryColor} size={25} />
                          My CV
                        </a>
                      </Grid>
                    </Grid>

          </Grid>
    );

}

export default withStyles(styles)(DescriptionBlocComponent);
