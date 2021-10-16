/* eslint-disable no-useless-computed-key */
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ReactCardFlip from "react-card-flip";
import Link from "react-router-dom/Link";
import { withStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { withTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { ImageList, ImageListItem } from "@material-ui/core";
import ProductDescription from "./ProductDescription";

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
    ["@media (max-width:1000px)"]: { fontSize: "60px" },
  },
  headSubTitle: {
    fontFamily: "Usuzi",
    color: "white",
    fontSize: "50px",
    // opacity: 1,
    zIndex: 100,
    ["@media (max-width:780px)"]: { fontSize: "20px" },
    ["@media (max-width:1000px)"]: { fontSize: "40px" },
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
    ["@media (max-width:1000px)"]: { fontSize: "30px" },
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

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 0,
      isFlipped: false,
      open: false,
    };
  }
  handleClick(e) {
    this.setState({ open: true }, () => {
      console.log(this.state.open);
    });
  }
  handleClose(e) {
    this.setState({ open: false }, () => {
      console.log(this.state.open);
    });
  }
  transform_image(input, title) {
    // alert("transform image");
    const bg1 = document.getElementById(title);
    if (input === "out") {
      bg1.style.transform = "scale(.9)";
      // bg2.style.transform = "scale(1)";
      this.setState({
        zoom: 0,
      });
    } else {
      bg1.style.transform = "scale(1.1)";
      this.setState({ zoom: 1 });
      // bg2.style.transform = "scale(0.7)";
    }
  }
  flip_image() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }
  render() {
    const {
      title,
      picture_url,
      link,
      description,
      t,
      showMore,
      images,
      classes,
    } = this.props;
    console.log(this.props);
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
    const regex = /[.,\s]/g;

    const not_flipped = () => {
      return (
        <>
          <CardHeader
            title={title}
            //   subheader="September 14, 2016"
          />
          {this.state.zoom === 0 ? (
            <CardMedia
              component="img"
              height="194"
              image={picture_url}
              alt={title}
              id={`media_${title}`}
            />
          ) : (
            <CardMedia
              component="img"
              // height="194"
              image={picture_url}
              alt={title}
              id={`media_${title}`}
              style={{
                transform: "scale(.8)",
              }}
            />
          )}
          <CardContent style={{ minHeight: "100px" }}>
            <Typography variant="body2" color="text.secondary">
              {t(description)}
            </Typography>
          </CardContent>
          {showMore === "true" ? (
            <>
              <Button
                style={{ color: "white" }}
                onClick={() => this.setState({ open: true })}
              >
                {t("View more")}
              </Button>
              <ProductDescription
                images={images}
                title={title}
                // classes={classes}
                callback={(state) => this.setState({ open: state })}
                open={this.state.open}
              />
            </>
          ) : null}
        </>
      );
    };
    return (
      <div style={{ display: "flex" }}>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <Card
            sx={{ width: 345 }}
            style={{ margin: 30, backgroundColor: "grey" }}
            id={title}
            onMouseEnter={
              showMore === "true"
                ? () => this.transform_image("in", title)
                : () => this.flip_image()
            }
            onMouseLeave={
              showMore === "true"
                ? () => this.transform_image("out", title)
                : null
            }
          >
            {not_flipped()}
          </Card>
          <Card
            sx={{ width: 345, minHeight: "400px" }}
            style={{ margin: 30, backgroundColor: "grey" }}
            id={title}
            onMouseEnter={
              showMore === "true"
                ? () => this.transform_image("in", title)
                : null
            }
            onMouseLeave={
              showMore === "true"
                ? () => this.transform_image("out", title)
                : () => this.flip_image()
            }
          >
            <CardContent style={{ minHeight: "100%" }}>
              <Button
                style={{ color: "white" }}
                component={Link}
                to={`/products-accessories#${title
                  .toLowerCase()
                  .replace(regex, "")}`}
              >
                {t("View more")}
              </Button>
              <CardMedia
                component="img"
                // height="194"
                image={picture_url}
                alt={title}
                id={`media_${title}`}
                style={{
                  transform: "scale(.8)",
                }}
              />
            </CardContent>
          </Card>
        </ReactCardFlip>
      </div>
    );
  }
}

export default withTranslation()(withStyles(styles)(Cards));
