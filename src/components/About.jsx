import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Soundwave from "../utils/Soundwave";
import Cards from "./Cards";
import { withTranslation } from "react-i18next";
import reviews from "../references/references.json";
import Reviews from "./Reviews";
import { Icon, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const styles = {
  first: {
    backgroundColor: "rgba(0,0,0,0.82)",
    // width: "98%",
    textAlign: "center",
    justifyContent: "center",
    padding: "30px",
    // height: "60%",
    marginTop: "0px",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    zIndex: 1,
  },
  second: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "95%",
    textAlign: "center",
    justifyContent: "center",
    padding: "30px",
    // height: "70vh",
    marginTop: "0px",
    // display: "flex",
    flexDirection: "row",
    zIndex: 1,
  },
  bg: {
    // position: "absolute",
    // backgroundColor: "rgba(0,0,0,0.82)",
    width: "100%",
    // textAlign: "center",
    // justifyContent: "center",
    // padding: "30px",
    background: "url('./assets/team.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    // opacity: 0.3,
    height: "70%",
    // top: 0,
    // position: "absolute",
    zIndex: 1,
    // "&:hover": {
    //   transform: "scale(90%)",
    // },
  },
  bg2: {
    // position: "absolute",
    // backgroundColor: "rgba(0,0,0,0.82)",
    width: "100%",
    right: 0,
    // textAlign: "center",
    // justifyContent: "center",
    // padding: "30px",
    background: "url('./assets/Layer2.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "281px 431px",
    // opacity: 0.3,
    height: "70%",
    position: "absolute",
    zIndex: 1,
    // "&:hover": {
    //   transform: "scale(90%)",
    // },
  },
  image: {
    // position: "relative",
    height: "200px",
    bottom: "0px",
  },
  headTitle: {
    // position: "fixed",
    fontFamily: "Usuzi",
    color: "white",
    fontSize: "80px",
    // opacity: 1,
    zIndex: 100,
  },
  headSubTitle: {
    fontFamily: "Usuzi",
    color: "white",
    fontSize: "50px",
    // opacity: 1,
    zIndex: 100,
  },
  welcome: {
    fontFamily: "Arial",
    color: "white",
    fontSize: "60px",
    display: "flex",
    justifyContent: "center",
    width: "90%",
    zIndex: 100,
    textDecoration: "underline",
  },
};
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, t } = this.props;
    return (
      <>
        <div className={classes.first} style={{ flexDirection: "column" }}>
          <h8 className={classes.headTitle}>Who we are</h8>
          <br />
          <div>
            <img src="../assets/team.jpg" alt="team" />
          </div>
          <div>
            <h2 style={{ color: "white" }}>
              {t(
                "The history of the HEAD brand and in particular of the HEOLO loudspeaker started almost by chance more than 10 years ago, when Leonardo D'Aprano and Luigi Ponzo, accepted the challenge of creating an omnidirectional loudspeaker with an audiophile vocation. The original intuition, and subsequent prototyping and testing, led to the creation of a loudspeaker that exceeded the project's expectations and initial specifications. Across the years, the working group had expanded including, Graziano Ponzo and Marco Bartolotta, with work skills in high-tech sectors of industrial electronics, musical instruments manufacturing, aerospace quality connections. Our common idea has been always to create high-end audio products that should have had an unusual approach and innovative content. This approach transpires in every product manufactured by our group."
              )}
            </h2>
          </div>
        </div>
        <div className={classes.second}>
          <h8 className={classes.headTitle}>Our Vision</h8>
          <br />
          <h8 className={classes.headSubTitle}>Innovation and quality</h8>
          <br />
          <div>
            <img src="../assets/vision.jpg" alt="team" />
          </div>
          <div>
            <h2 style={{ color: "white" }}>
              {t(
                "HEAD (High End Audio Devices) represents a young brand with the aim of creating highly innovative products for high quality audio listening. In the beginning our efforts have focused on the realization of custom projects for a few selected customers. Given the excellent feedback received, we have decided to offer some of our achievements to the wider public, as the result of expertise established over more than 20 years of high fidelity realizations (both in electronics and in the loudspeakers). Our products are entirely and proudly handcrafted in Italy. The small differences and imperfections of the finish are not an indication of poor accuracy, but are present to witness the hand of the craftsman that makes our products almost unique. High quality manufacturing of our products is comparably superior to mass-produced devices, which can not, for obvious limitations of the industrial production process, present the same care, particularly as regards the electroacoustic aspects. An integral part of the production process is represented by listening sessions of each of our products, through the use of selected and representative musical programs of various genres, in a defined environment and set-up. This last stage of the production process is in our opinion essential to guarantee the quality of the product and to verify that the final yield is the one expected."
              )}
            </h2>
          </div>
        </div>
      </>
    );
  }
}
export default withTranslation()(withStyles(styles)(About));
