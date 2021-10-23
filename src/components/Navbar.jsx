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
// import TranslateIcon from "@mui/icons-material/Translate";
import i18n from "../i18n";
// import { FormControlLabel, FormGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import MenuIcon from "@mui/icons-material/Menu";
import ReactCountryFlag from "react-country-flag";
import Stack from "@mui/material/Stack";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
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
      lan: "en",
      checked: false,
    };
  }
  componentDidMount(props) {
    if (localStorage.getItem("heolo_lan") === "en") {
      this.setState({ lan: localStorage.getItem("heolo_lan"), checked: true });
    } else {
      this.setState({ lan: localStorage.getItem("heolo_lan"), checked: false });
    }
  }
  changeLanguage = (lng) => {
    this.setState({ lan: lng, checked: !this.state.checked });
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

              <Button style={{}}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <ReactCountryFlag
                    countryCode="IT"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="IT"
                    // onClick={() => this.changeLanguage("en")}
                  />
                  <AntSwitch
                    // defaultChecked
                    checked={this.state.checked}
                    onChange={
                      this.state.lan === "en"
                        ? () => this.changeLanguage("it")
                        : () => this.changeLanguage("en")
                    }
                    inputProps={{ "aria-label": "ant design" }}
                  />
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    aria-label="EN"
                    // onClick={() => this.changeLanguage("en")}
                  />
                </Stack>
              </Button>
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
            {/* <Button
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
            > */}
            {/* <Button>
              <ReactCountryFlag
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                aria-label="EN"
                onClick={() => this.changeLanguage("en")}
              /> */}
            {/* </Button> */}
            {/* <Button onClick={() => this.changeLanguage("it")}> */}
            {/* <ReactCountryFlag
                countryCode="IT"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="IT"
                onClick={() => this.changeLanguage("en")}
              />
            </Button> */}
            <Button style={{}}>
              <Stack direction="row" spacing={1} alignItems="center">
                <ReactCountryFlag
                  countryCode="IT"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="IT"
                  // onClick={() => this.changeLanguage("en")}
                />
                <AntSwitch
                  // defaultChecked
                  checked={this.state.checked}
                  onChange={
                    this.state.lan === "en"
                      ? () => this.changeLanguage("it")
                      : () => this.changeLanguage("en")
                  }
                  inputProps={{ "aria-label": "ant design" }}
                />
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  aria-label="EN"
                  // onClick={() => this.changeLanguage("en")}
                />
              </Stack>
            </Button>
            {/* <MenuItem onClick={() => this.changeLanguage("fr")}>
                French
              </MenuItem>
              <MenuItem onClick={() => this.changeLanguage("es")}>
                {t("Spanish")}
              </MenuItem>
              <MenuItem onClick={() => this.changeLanguage("ru")}>
                {t("Russian")}
              </MenuItem> */}
            {/* </Menu> */}
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
