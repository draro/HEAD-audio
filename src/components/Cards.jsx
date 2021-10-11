import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "react-router-dom/Link";
import { withStyles } from "@material-ui/styles";
import { Button, stepClasses } from "@mui/material";
import { withTranslation } from "react-i18next";

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
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 0,
    };
  }
  transform_image(input, title) {
    // alert("transform image");
    const bg1 = document.getElementById(title);

    if (input === "out") {
      bg1.style.transform = "scale(1)";
      // bg2.style.transform = "scale(1)";
      this.setState({
        zoom: 0,
      });
    } else {
      bg1.style.transform = "scale(1.2)";
      this.setState({ zoom: 1 });
      // bg2.style.transform = "scale(0.7)";
    }
  }
  render() {
    const { title, picture_url, link, description, t, classes } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <Card
          sx={{ width: 345 }}
          style={{ margin: 30, backgroundColor: "grey" }}
          id={title}
          onMouseEnter={() => this.transform_image("in", title)}
          onMouseLeave={() => this.transform_image("out", title)}
        >
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
                transform: "scale(.7)",
              }}
            />
          )}
          <CardContent style={{ minHeight: "100px" }}>
            <Typography variant="body2" color="text.secondary">
              {t(description)}
            </Typography>
          </CardContent>
          <Button style={{ color: "white" }} component={Link} to={link}>
            {t("View more")}
          </Button>
        </Card>
      </div>
    );
  }
}

export default withTranslation()(withStyles(styles)(Cards));
