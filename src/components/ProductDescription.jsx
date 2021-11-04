/* eslint-disable array-callback-return */
/* eslint-disable no-useless-computed-key */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Typography } from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import { withStyles } from "@material-ui/styles";
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
    backgroundColor: "rgba(0,0,0,0.6)",
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class ProductDescription extends React.Component {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     callback(true);
  //   };
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClose = () => {
    this.props.callback(false);
    // setOpen(false);
  };
  render() {
    const { classes, open, title, images, technical, description } = this.props;

    const imageBuild = (images) => {
      let imageSlider = [];
      images.map((url) => {
        imageSlider.push({ original: url, thumbnail: url });
      });
      return imageSlider;
    };
    // console.log("CLASSES= ", classes);
    console.log("technical = ", technical);
    return (
      <div>
        {open && (
          <Dialog
            style={{ zIndex: 1000, backgroundColor: "rgba(0,0,0,.6)" }}
            fullScreen
            open={open}
            onClose={() => this.handleClose()}
            TransitionComponent={Transition}
          >
            <AppBar
              sx={{
                position: "relative",
                backgroundColor: "#848587",
                fontFamily: "Usuzi",
              }}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => this.handleClose()}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{ ml: 2, flex: 1 }}
                    style={{ fontFamily: "Usuzi" }}
                    variant="h3"
                    component="div"
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ ml: 2, flex: 2 }}
                    style={{ fontFamily: "Usuzi" }}
                    variant="h4"
                    component="div"
                  >
                    {title.startsWith("HEOLO") || title.startsWith("H.E.O.L.O.")
                      ? "High End Omnidirectional Loudspeaker"
                      : title === "M.U.SI.C.A."
                      ? "Modular Unit Silicon Core Amplifier"
                      : title === "TU.LI.P."
                      ? "TUbe Like Preamplifier"
                      : ""}
                  </Typography>
                </div>
              </Toolbar>
            </AppBar>
            <div
              className={classes.first}
              style={{ flexDirection: "column", color: "white" }}
            >
              {description}
              <h2
                classname={classes.headTitle}
                style={{
                  color: "white",
                  fontSize: "30px",
                  fontFamily: "Usuzi",
                }}
              >
                Technical Specification
              </h2>
            </div>
            <div
              className={classes.second}
              style={{ flexDirection: "column", display: "flex" }}
            >
              {technical &&
                technical.map((title) => {
                  for (const key in title) {
                    // let text;
                    return (
                      <div key={key}>
                        <h2 style={{ color: "white", fontFamily: "Usuzi" }}>
                          {key.toUpperCase()}:
                        </h2>
                        {title[key].map((bullet) => {
                          return <h4 style={{ color: "white" }}>{bullet}</h4>;
                        })}
                      </div>
                    );
                  }
                })}
            </div>

            <div className={classes.first}>
              <h2 className={classes.headSubTitle} style={{ color: "white" }}>
                Gallery
              </h2>
            </div>
            <div className={classes.second}>
              {images && (
                //   <ImageList cellHeight={220} className="" cols={3}>
                //     {images.map((tile) => (
                //       <ImageListItem key={tile} cols={1}>
                //         <img src={tile} alt={tile} />
                //       </ImageListItem>
                //     ))}
                //   </ImageList>
                <ImageGallery
                  items={imageBuild(images)}
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                />
              )}
            </div>

            {/* <List>
                  <ListItem button>
                    <ListItemText
                      primary="Phone ringtone"
                      secondary="Titania"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText
                      primary="Default notification ringtone"
                      secondary="Tethys"
                    />
                  </ListItem>
                </List> */}
            {/* {images.map(())} */}
          </Dialog>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(ProductDescription);
