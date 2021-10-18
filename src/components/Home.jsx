/* eslint-disable no-useless-computed-key */
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Cards from "./Cards";
import { withTranslation } from "react-i18next";
import reviews from "../references/references.json";
import Reviews from "./Reviews";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import prodotti from "../references/prodotti.json";
import Contacts from "./Contacts";
import AnimatedBg from "react-animated-bg";

// const animations = keyframes`
// from: { background-position: 0 0; }
//     to: { background-position: 100% 0; }
// `;
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
  mobile: {
    ["@media (max-width:1000px)"]: {
      background: "url('./assets/h1.png')",
      backgroundColor: "rgba(0,0,0,0.82)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
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
    // width: "100%",
    // textAlign: "center",
    // justifyContent: "center",
    // padding: "30px",
    background: "url('./assets/bg2.png')",
    backgroundRepeat: "cover",
    backgroundSize: "100%",
    // backgroundRepeat: "repeat-x",
    backgroundPosition: "0px 0px",
    height: "80%",
    // top: 0,
    // position: "absolute",
    zIndex: 1,
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
    ["@media (max-width:1000px,min-width:780px)"]: { fontSize: "60px" },
  },
  headSubTitle: {
    fontFamily: "Usuzi",
    color: "white",
    fontSize: "50px",
    // opacity: 1,
    zIndex: 100,
    ["@media (max-width:780px)"]: { fontSize: "20px" },
    ["@media (max-width:1000px,min-width:780px)"]: { fontSize: "40px" },
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
    ["@media (max-width:1000px,min-width:780px)"]: { fontSize: "30px" },
  },
  animatedsection: {
    // margin-bottom: 50px;
  },

  animatedimages: {
    padding: "100px 0",
    // height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    ["@media (max-width:1000px)"]: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
  },
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom_active: false,
      revNum: 0,
      products: prodotti,
      imagesList: [],
    };
    this.transform_image = this.transform_image.bind(this);
  }
  componentDidMount() {
    // bg_anim();
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.setState({
        imagesList: [
          'url("./assets/Layer0.png")',
          'url("./assets/Layer1.png")',
          'url("./assets/h1.png")',
          'url("./assets/sigma_bg.png")',
          'url("./assets/pi-greco_bg.png")',
        ],
      });
    } else {
      this.setState({
        imagesList: [
          'url("./assets/bg.png")',
          'url("./assets/bg2.png")',
          'url("./assets/bg3.png")',
        ],
      });
    }
  }
  transform_image(input) {
    // alert("transform image");
    const bg1 = document.getElementById("bg_img1");
    // const bg2 = document.getElementById("bg_img2");
    // alert(this.state.zoom_active);
    if (input === "out") {
      bg1.style.transform = "scale(1)";
      // bg2.style.transform = "scale(1)";
      this.setState({ zoom_active: true });
    } else {
      bg1.style.transform = "scale(1)";
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
    const isMobile = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    };

    return (
      <>
        <div
          className={classes.first}
          id="first"
          // onMouseEnter={() => this.transform_image("in")}
          // onMouseLeave={() => this.transform_image("out")}
        >
          {/* <canvas
            id="canvas"
            style={{ position: "absolute", width: "100%", height: "100%" }}
          ></canvas> */}
          <AnimatedBg
            colors={this.state.imagesList}
            duration={2}
            delay={1}
            timingFunction="ease-out"
            className={classes.animatedimages}
          >
            {/* <div className={classes.bg} id="bg_img1"> */}
            <h1 className={classes.headTitle}>H.E.A.D. Audio</h1>
            <h3 className={classes.headSubTitle}>High End Audio Devices</h3>
            <h2 className={classes.welcome}>
              {t("Welcome to a new listening experience")}
            </h2>
          </AnimatedBg>
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
                    technical={card.technical}
                    images={card.images}
                  ></Cards>
                );
              })}
            </div>
          </div>
        </div>
        {this.state.revNum >= 0 ? (
          <div className={classes.first} style={{ flexDirection: "column" }}>
            <h2 className={classes.headSubTitle}>
              {t("What they say about HEOLO")}
            </h2>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowBackIosIcon
                style={{
                  visibility: "visible",
                  color: "blue",
                  margin: isMobile ? 5 : 10,
                  fontSize: isMobile ? 20 : 40,
                }}
                onClick={() => this.previous_review()}
                size="xl"
              />

              <Reviews reviews={reviews[this.state.revNum]} />

              <ArrowForwardIosIcon
                color="white"
                style={{
                  visibility: "visible",
                  color: "blue",
                  margin: isMobile ? 5 : 10,
                  fontSize: isMobile ? 20 : 40,
                }}
                onClick={() => this.next_review()}
                size="xl"
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
