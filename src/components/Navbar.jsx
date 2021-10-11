import React from "react";
import Link, { Redirect } from "react-router-dom/Link";
// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import FaceIcon from "@material-ui/icons/Face";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import withStyles from "@material-ui/core/styles/withStyles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import CommentIcon from "@material-ui/icons/Comment";
import EventIcon from "@material-ui/icons/Event";
import UpdateIcon from "@material-ui/icons/Update";
import Home from "./Home";
import { useTranslation, I18nextProvider } from "react-i18next";
import { withTranslation } from "react-i18next";

import {
  //   AppBar,
  Avatar,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
// import { ExitToApp, Mail, Search, Title, Translate } from "@material-ui/icons";
import TranslateIcon from "@mui/icons-material/Translate";
import i18n from "../i18n";

const styles = {
  menu: {
    // position: "fixed",
    maxHeight: "100px",
  },
  logo: {
    height: "80px",
  },
  progress: {
    position: "absolute",
  },
  input: {
    margin: "auto 10px",
  },
  notification: {
    backgroundColor: "red",
    fontSize: "10px",
    color: "white",
    width: "18px",
    borderRadius: "50%",
    position: "absolute",
    top: "-10px",
    left: "34px",
  },
  toggleIcons: {
    width: "25px",
    minWidht: "20px",
  },
  notificationText: {
    fontSize: "0.8rem",
  },
  search: {
    color: "white",
    outlineColor: "white",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {},
      open: false,
      openNotification: false,
      openReservation: false,
      value: "",
      anchorEl: "",
      notificationsShow: "",
      reservationShow: "",
      languageShow: "",
      openLanguage: false,
      city: "",
    };
  }
  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    this.handleCloseLanguage();
    localStorage.setItem("heolo_lan", lng);
  };
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClickNotification = (event) => {
    this.setState({ notificationsShow: event.currentTarget });
  };
  handleClickReservation = (event) => {
    this.setState({ reservationShow: event.currentTarget });
  };
  handleClickLanguage = (event) => {
    this.setState({ languageShow: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleCloseNotification = () => {
    this.setState({ notificationsShow: null });
  };
  handleCloseReservation = () => {
    this.setState({ reservationShow: null });
  };
  handleCloseLanguage = () => {
    this.setState({ languageShow: null });
  };
  handleOpenNotification = () => {
    this.setState({ openNotification: true });
  };
  handleOpenReservation = () => {
    this.setState({ openReservation: true });
  };
  render() {
    const { classes, t } = this.props;
    // const { t, i18n } = useTranslation();
    const test = () => {
      console.log(this.pro);
    };

    return (
      <AppBar
        position="relative"
        className="infront space"
        style={{ color: "white" }}
        color="transparent"
        title="H.E.A.D."
      >
        {test()}
        <Toolbar className="nav-container" title="H.E.A.D">
          <div className="leftMenu">
            {/* <Tooltip title="Home">
              <Typography
                className={classes.logo}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "0 10px",
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bold",
                }}
                component={Link}
                to="/"
              > */}
            <img className="App-logo" src={"HEAD2.png"} />
            {/* Dine@Home */}
            {/* </Typography>
            </Tooltip> */}
          </div>

          <div className="rightMenu">
            <>
              <Button color="inherit" component={Link} to="/">
                {t("Home")}
              </Button>
              <Button color="inherit" component={Link} to="/about-us">
                {t("About Us")}
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/products-accessories"
              >
                {t("Products & Accessories")}
              </Button>
              <Button color="inherit" component={Link} to="/contact-us">
                {t("Contacts")}
              </Button>
              <Button
                color="inherit"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleClickLanguage}
              >
                <TranslateIcon style={{ visibility: "visible" }} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={this.state.languageShow}
                keepMounted
                open={Boolean(this.state.languageShow)}
                onClose={this.handleCloseLanguage}
              >
                <MenuItem onClick={() => this.changeLanguage("en")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => this.changeLanguage("it")}>
                  Italian
                </MenuItem>
                <MenuItem onClick={() => this.changeLanguage("fr")}>
                  French
                </MenuItem>
                <MenuItem onClick={() => this.changeLanguage("es")}>
                  {t("Spanish")}
                </MenuItem>
                <MenuItem onClick={() => this.changeLanguage("ru")}>
                  {t("Russian")}
                </MenuItem>
              </Menu>
            </>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withTranslation()(withStyles(styles)(Navbar));
