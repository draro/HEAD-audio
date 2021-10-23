/* eslint-disable no-useless-computed-key */
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTranslation } from "react-i18next";
import Cards from "./Cards";
import products from "../references/prodotti.json";
import { Button } from "@mui/material";
import pdf from "../references/techDescription.pdf";
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
                "H.E.O.LO. is a major innovation which overcomes the typical limits of traditional speaker design. The listening experience with any H.E.O.L.O. model is remarkable because the speakers literally 'disappear'. The speakers position is essentially undetectable whilst they maintain the focus and detail of each individual instrument. The timbre and tonal balance do not vary as the listening position changes, so making the concept of “sweet-spot” obsolete. This technical innovation makes these speakers unique and inimitable."
              )}
            </h3>
            <Button variant="contained">
              <a
                style={{
                  color: "white",
                  fontFamily: "Usuzi",
                  textDecoration: "none",
                }}
                href={pdf}
                target="_blank"
                rel="noreferrer"
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
              "&lt;&lt;Power is nothing without control!&gt;&gt; so says the famous quotation… and it is precisely on this principle that the design of our brand-new amplifier is based. MUSICA is an uncompromising “speaker driver”, characterised by its excellent ability to manage complex loads while maintaining an extreme linearity, very low noise and a remarkable speed in the transient response. MUSICA is the first High End Amplifier that integrates Open Source HW technology! Inside there is an Arduino TM module that constantly controls all the internal functions of the amplifier. This includes the monitoring of its operating temperature, the regulation of the polarization current of the final stage, so allowing its transition from a class A to a class AB, as well speed control of the extremely silent cooling fan which thus guarantees constant and stable operation over time. This technology allows unprecedented versatility and customization. Its designed is based on an optimized IC-Transistor architecture. MUSICA, despite being a muscular power amplifier, is extremely compact so can be used as a single stereo amplifier or in a bi-amplification arrangement. MUSICA is able to deliver 2 x 130WRMS into 8 Ohms, 2 x 250WRMS into 4 Ohms, and can also handle loads as low as 2 Ohms due to its continuous high current output that comfortably reaches 30 Amps."
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
              "The traditional “valve amplifier” sound is a highly sought-after feature in the audiophile world, often being cited as a true term of reference to identify a warm, pleasing sound, which is never harsh, whilst still being rich in small details. However, the thermionic valve is a device which requires very careful selection and presents a series of other problems for amplifier design. They require a complex circuit structure using high voltages, often being a source of electronic noise and unwanted induced electromagnetic disturbance. They also have significant technological limits, such as deterioration of performance over time, and a susceptibility to microphonics (induced electrical noise from vibrations). After years of study and experimentation, H.E.A.D. have created a preamplifier capable of reproducing the typical sound characteristics of a valve preamp using completely analogue and solid-state circuits, but without the negative characteristics of the valves themselves. The key components of our new preamplifier are the SSTD (Solid State Tube Driver) and SST (Solid State Tube) devices which allow it to characterise the input signal making it similar to a “valve sound”. It is thanks to this technology that it has been possible to create a true sound evolution to bring to your audiophile system."
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
