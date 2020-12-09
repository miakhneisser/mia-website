import { withStyles } from "@material-ui/core/styles";
import { white } from "../static/colors";
import landingImage from "../images/landing-image.jpg";
import Icon from '../Icon'
import { Parallax } from "react-parallax";


const styles = theme => ({
    container: {
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
    },
    arrowDown: {
        bottom: 0,
        position: 'absolute',
        paddingBottom: '1vh',
        left: 'calc(50vw - 20px)'
    },
});

const LandingBlocComponent = (props) => {
    const { classes } = props;

    return (
        <Parallax className={classes.container} bgImage={landingImage} strength={500}>
              <Icon className={classes.arrowDown} name="arrow-down" color={white} size={40} />
        </Parallax>
    );

}

export default withStyles(styles)(LandingBlocComponent);
