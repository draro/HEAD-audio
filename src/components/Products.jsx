import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTranslation } from "react-i18next";
import Cards from "./Cards";
import products from "../references/prodotti.json";
const styles = {
  first: {
    backgroundColor: "rgba(0,0,0,0.82)",
    // width: "98%",
    textAlign: "center",
    justifyContent: "center",
    padding: "30px",
    // height: "60%",
    marginTop: "0px",
    // display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    zIndex: 1,
  },
  second: {
    backgroundColor: "rgba(0,0,0,0.2)",
    // width: "95%",
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
    background: "url('./assets/bg.png')",
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
class Products extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.first}>
        <h2 className={classes.headTitle}>H.E.O.LO.</h2>
        <h2 className={classes.headSubTitle}>
          <strong>H</strong>igh <strong>E</strong>nd <strong>O</strong>
          mnidirectional <strong>Lo</strong>udspeakers
        </h2>
        <div style={{ flexDirection: "row" }}>
          <h3 style={{ color: "white" }}>
            {t(
              "H.E.O.LO. is an innovative speaker designed to overcome the typical limits of traditional acoustic transduction systems. The listening experience with any HEOLO model is remarkable since the speakers literally 'disappear'. The speaker's position is practically not detectable while maintaining the focus and detail of each individual instrument. The timbre and tonal balance do not vary as the listening position changes, making the concept of sweet point obsolete. A technical solution that makes these speakers unique and inimitable"
            )}
          </h3>
          <div />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {products.map((card) => {
              if (card.title.includes("HEOLO")) {
                return (
                  <Cards
                    key={card.title}
                    title={card.title.toUpperCase()}
                    picture_url={card.picture_url}
                    link={card.link}
                    description={card.description}
                  ></Cards>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation()(withStyles(styles)(Products));
