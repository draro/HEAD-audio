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
import prodotti from "../references/prodotti.json";
import Contacts from "./Contacts";
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
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom_active: false,
      revNum: 0,
      products: prodotti,
    };
    this.transform_image = this.transform_image.bind(this);
  }
  transform_image(input) {
    // alert("transform image");
    const bg1 = document.getElementById("bg_img1");
    const bg2 = document.getElementById("bg_img2");
    // alert(this.state.zoom_active);
    if (input === "out") {
      bg1.style.transform = "scale(1)";
      // bg2.style.transform = "scale(1)";
      this.setState({ zoom_active: true });
    } else {
      bg1.style.transform = "scale(0.7)";
      // bg2.style.transform = "scale(0.7)";
      this.setState({ zoom_active: false });
    }
  }
  previous_review() {
    let num = this.state.revNum;
    let nextNum;
    if (num === 0) {
      console.log(reviews.length);
      nextNum = reviews.length - 1;
    } else {
      nextNum = num - 1;
    }
    this.setState({ revNum: nextNum });
  }
  next_review() {
    let num = this.state.revNum;
    let nextNum;
    if (num === reviews.length - 1) {
      console.log(reviews.length);
      nextNum = 0;
    } else {
      nextNum = num + 1;
    }
    this.setState({ revNum: nextNum });
  }
  render() {
    const { classes, t } = this.props;
    console.log(reviews);
    const carte = () => {
      for (var i = 0; i < this.state.products.length; i++) {
        return <Cards />;
      }
    };
    return (
      <>
        <div
          className={classes.first}
          // onMouseEnter={() => this.transform_image("in")}
          // onMouseLeave={() => this.transform_image("out")}
        >
          <div className={classes.bg} id="bg_img1">
            <h8 className={classes.headTitle}>H.E.A.D. Audio</h8>
            <h3 className={classes.headSubTitle}>High End Audio Devices</h3>
            <br />
            <h2 className={classes.welcome}>
              {t("Welcome to a new listening experience")}
            </h2>
          </div>
          {/* <div className={classes.bg2} id="bg_img2"></div> */}
          <div style={{ zIndex: 100 }}>
            {/* <img src="./assets/h1.png" /> */}
          </div>

          {/* <Soundwave /> */}
        </div>
        <div className={classes.second}>
          <h2 className={classes.headTitle}>{t("Products")}</h2>
          <h2 className={classes.headSubTitle}>
            {t("Discover our Products and Accessories")}
          </h2>
          <div style={{ flexDirection: "row" }}>
            {/* <h3 style={{ color: "white" }}>
              {t(
                "H.E.O.LO. is an innovative speaker designed to overcome the typical limits of traditional acoustic transduction systems. The listening experience with any HEOLO model is remarkable since the speakers literally 'disappear'. The speaker's position is practically not detectable while maintaining the focus and detail of each individual instrument. The timbre and tonal balance do not vary as the listening position changes, making the concept of sweet point obsolete. A technical solution that makes these speakers unique and inimitable"
              )}
            </h3> */}
            <div />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {this.state.products.map((card) => {
                console.log(card.title, card.picture_url, card.link);
                return (
                  <Cards
                    key={card.title}
                    title={card.title.toUpperCase()}
                    picture_url={card.picture_url}
                    link={card.link}
                    description={card.description}
                  ></Cards>
                );
              })}
            </div>
          </div>
        </div>
        {this.state.revNum >= 0 ? (
          <div className={classes.first} style={{ flexDirection: "column" }}>
            <h2 className={classes.headTitle}>What they say about HEOLO</h2>{" "}
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowBackIosIcon
                style={{ visibility: "visible", color: "white", margin: 10 }}
                onClick={() => this.previous_review()}
              />

              <Reviews reviews={reviews[this.state.revNum]} />

              <ArrowForwardIosIcon
                color="white"
                style={{ visibility: "visible", color: "white", margin: 10 }}
                onClick={() => this.next_review()}
              />
            </div>
          </div>
        ) : null}
        <Contacts colore={classes.second} />
      </>
    );
  }
}
export default withTranslation()(withStyles(styles)(Home));
