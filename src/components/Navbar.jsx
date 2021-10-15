import React from "react";
import Link from "react-router-dom/Link";
// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import withStyles from "@material-ui/core/styles/withStyles";

import { withTranslation } from "react-i18next";

// import { ExitToApp, Mail, Search, Title, Translate } from "@material-ui/icons";
import TranslateIcon from "@mui/icons-material/Translate";
import i18n from "../i18n";
// import { FormControlLabel, FormGroup } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Switch from "@mui/material/Switch";
import MenuIcon from "@mui/icons-material/Menu";
// const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   marginRight: 7,
//   "& .MuiSwitch-switchBase": {
//     margin: 1,
//     padding: 0,
//     transform: "translateX(6px)",
//     "&.Mui-checked": {
//       color: "#fff",
//       transform: "translateX(22px)",
//       "& .MuiSwitch-thumb:before": {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//           "#fff"
//         )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//       },
//       "& + .MuiSwitch-track": {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
//     width: 32,
//     height: 32,
//     "&:before": {
//       content: "''",
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       left: 0,
//       top: 0,
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//         "#fff"
//       )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//   },
//   "& .MuiSwitch-track": {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
//     borderRadius: 20 / 2,
//   },
// }));
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
    const { t } = this.props;
    // const { t, i18n } = useTranslation();
    const menubar = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return (
          <>
            <Button
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon style={{ visibility: "visible" }} fontSize="large" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem color="inherit" component={Link} to="/">
                {t("Home")}
              </MenuItem>
              <MenuItem color="inherit" component={Link} to="/about-us">
                {t("About Us")}
              </MenuItem>
              <MenuItem
                color="inherit"
                component={Link}
                to="/products-accessories"
              >
                {t("Products & Accessories")}
              </MenuItem>
              <MenuItem color="inherit" component={Link} to="/contact-us">
                {t("Contacts")}
              </MenuItem>
              {/* <FormGroup> */}

              {/* </FormGroup> */}
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
                  {t("English")}
                </MenuItem>
                <MenuItem onClick={() => this.changeLanguage("it")}>
                  {t("Italian")}
                </MenuItem>
                {/* <MenuItem onClick={() => this.changeLanguage("fr")}>
                  French
                </MenuItem>
                <MenuItem onClick={() => this.changeLanguage("es")}>
                  {t("Spanish")}
                </MenuItem>
                <MenuItem onClick={() => this.changeLanguage("ru")}>
                  {t("Russian")}
                </MenuItem> */}
              </Menu>
              {/* <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        /> */}
            </Menu>
          </>
        );
      } else {
        return (
          <>
            <Button color="inherit" component={Link} to="/">
              {t("Home")}
            </Button>
            <Button color="inherit" component={Link} to="/about-us">
              {t("About Us")}
            </Button>
            <Button color="inherit" component={Link} to="/products-accessories">
              {t("Products & Accessories")}
            </Button>
            <Button color="inherit" component={Link} to="/contact-us">
              {t("Contacts")}
            </Button>
            {/* <FormGroup> */}

            {/* </FormGroup> */}
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
            {/* <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label=""
              /> */}
          </>
        );
      }
    };

    return (
      <AppBar
        position="relative"
        className="infront space"
        style={{ color: "white" }}
        color="transparent"
        title="H.E.A.D."
      >
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
            <a href="/">
              <img className="App-logo" src={"HEAD2.png"} alt="Logo" />
            </a>
            {/* Dine@Home */}
            {/* </Typography>
            </Tooltip> */}
          </div>

          <div className="rightMenu">{menubar()}</div>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withTranslation()(withStyles(styles)(Navbar));
