/* eslint-disable no-useless-computed-key */
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTranslation } from "react-i18next";
import Cards from "./Cards";
import products from "../references/prodotti.json";
import { Button } from "@mui/material";
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
    ["@media (max-width:780px)"]: { fontSize: "30px" },
    ["@media (max-width:1000px,min-width:781px)"]: { fontSize: "60px" },
  },
  headSubTitle: {
    fontFamily: "Usuzi",
    color: "white",
    fontSize: "50px",
    // opacity: 1,
    zIndex: 100,
    ["@media (max-width:780px)"]: { fontSize: "20px" },
    ["@media (max-width:1000px,min-width:781px)"]: { fontSize: "40px" },
  },
  welcome: {
    fontFamily: "Usuzi",
    color: "white",
    fontSize: "40px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    zIndex: 100,
    textDecoration: "underline",
    ["@media (max-width:780px)"]: { fontSize: "15px" },
    ["@media (max-width:1000px,min-width:781px)"]: { fontSize: "30px" },
  },
};
class Products extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <>
        <div className={classes.first}>
          <h2 className={classes.headTitle} id="heolo">
            H.E.O.LO.
          </h2>
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
            <Button variant="contained">
              <a
                style={{
                  color: "white",
                  fontFamily: "Usuzi",
                  textDecoration: "none",
                }}
                href="../assets/techDesription.pdf"
                download
              >
                {t("Download the HEOLO Technical Description")}
              </a>
            </Button>
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
                      showMore="true"
                      images={card.images}
                      technical={card.technical}
                    ></Cards>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
        <div className={classes.second}>
          <h2 className={classes.headTitle} id="musica">
            M.U.SI.C.A.
          </h2>
          <h3 className={classes.headSubTitle}>
            MODULAR UNIT SILICON CORE AMPLIFIER
          </h3>
          <h3 style={{ color: "white" }}>
            {t(
              "<<Power is nothing without control!>> so he quoted a famous commercial… and it is precisely on this principle that the design of our brand new amplifier is based. MUSICA, is an uncompromising “Speaker Driver”, characterized by an excellent ability to manage complex loads while maintaining an extreme linearity, a very low noise and a remarkable speed in the transient response. MUSICA is the first High End Amplifier that integrates Open Source HW technology! Inside there is an Arduino TM module that constantly controls all the internal stages of the amplifier; stage from outlet, to temperature monitoring of operation, to the regulation of the polarization current of the final stage, allowing the passage from class A to AB, up to the tachometric control of the extremely silent cooling fan, guaranteeing constant and stable operation over time. This choice allows unprecedented versatility and customization. MUSICA, despite being a muscular power amp, is extremely compact and modular (stereo or bi-amping) and is based on an optimized IC-Transistor architecture. MUSICA is able to deliver 2x130WRMS on 8 Ohm, 2x250WRMS on 4 Ohm, able to handle even limit loads of 2 Ohm thanks to a of current in continuous regime that easily reaches 30 Ampere."
            )}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {products.map((card) => {
              if (card.title.includes("M.U.SI.C.A.")) {
                return (
                  <Cards
                    key={card.title}
                    title={card.title.toUpperCase()}
                    picture_url={card.picture_url}
                    link={card.link}
                    description={card.description}
                    showMore="true"
                    images={card.images}
                  ></Cards>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className={classes.first} id="tulip">
          <h2 className={classes.headTitle}>TU.LI.P.</h2>
          <h3 className={classes.headSubTitle}>TUBE LIKE PREAMPLIFIER</h3>
          <h3 style={{ color: "white" }}>
            {t(
              "The tube sound is a highly sought after feature in the audiophile field, often being cited as a true term of reference to identify a pleasant sound, never harsh and at the same time rich in micro-information. However, the thermionic valve is a device which in addition to requiring careful selection, presents a series of other problems; complex circuit structure (voltages on average high, source of electronic noise and induced electromagnetic disturbances) and technological limits (deterioration of performance over time, microphonics, etc.). After years of study and experimentation, the H.E.A.D. have created, using completely analog and solid state circuits, a preamplifier capable of reproducing the typical sounds of a tube preamp, but without all the negative characteristics of the tubes. The key components of the Preamplifier are the SSTD (Solid State Tube Driver) and SST (Solid State Tube) devices which allow to characterize the input signal making it similar to a “tube tone”. It is thanks to this technology that it has been possible to create what represents a true sound evolution to bring to your Hi-end system."
            )}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {products.map((card) => {
              if (card.title.includes("TU.LI.P.")) {
                return (
                  <Cards
                    key={card.title}
                    title={card.title.toUpperCase()}
                    picture_url={card.picture_url}
                    link={card.link}
                    description={card.description}
                    showMore="true"
                    images={card.images}
                  ></Cards>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </>
    );
  }
}
export default withTranslation()(withStyles(styles)(Products));
