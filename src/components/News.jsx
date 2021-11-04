/* eslint-disable no-useless-computed-key */
import { withStyles } from "@material-ui/core";
import React from "react";
import { withTranslation } from "react-i18next";
import NewsDescription from "./NewsDescription";
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
    fontSize: "30px",
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

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch("../assets/news/news.json")
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        this.setState({ news: json });
      });

    const backtotop = document.getElementById("backToTop");
    backtotop.style.color = "black";
  }
  componentWillUnmount() {
    const backtotop = document.getElementById("backToTop");
    backtotop.style.color = "white";
  }
  render() {
    const { news } = this.state;
    const { classes } = this.props;
    console.log("this.props=", this.props);
    return (
      <>
        <div
          className={classes.first}
          id="first"
          style={{ flexDirection: "column" }}
          // onMouseEnter={() => this.transform_image("in")}
          // onMouseLeave={() => this.transform_image("out")}
        >
          <h2 className={classes.headSubTitle}>h.e.a.d.</h2>
          <h1 className={classes.headTitle} style={{ marginTop: 0 }}>
            News
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            // flex: "1 2 200px",
            flexFlow: "row wrap",
            justifyContent: "space-around",
          }}
        >
          {news ? (
            news.map((data) => {
              return (
                <NewsDescription
                  link={data.link}
                  title={data.title}
                  description={data.description}
                  image={data.image ? data.image : "../assets/News.png"}
                />
              );
            })
          ) : (
            <h2> No news</h2>
          )}
        </div>
      </>
    );
  }
}
export default withTranslation()(withStyles(styles)(News));
