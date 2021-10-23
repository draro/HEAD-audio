/* eslint-disable no-useless-escape */
/* eslint-disable no-useless-computed-key */
import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { TextField } from "@material-ui/core";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { withTranslation } from "react-i18next";
import { Visibility } from "@mui/icons-material";
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
    flexDirection: "column",
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
    ["@media (max-width:1000px, min-width:781px)"]: { fontSize: "60px" },
  },
  headSubTitle: {
    fontFamily: "Usuzi",
    color: "white",
    fontSize: "50px",
    // opacity: 1,
    zIndex: 100,
    ["@media (max-width:780px)"]: { fontSize: "20px" },
    ["@media (max-width:1000px, min-width:781px)"]: { fontSize: "40px" },
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
    ["@media (max-width:1000px, min-width:781px)"]: { fontSize: "30px" },
  },
  inputs: {
    backgroundColor: "white",
    color: "black",
  },
};
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      errorTextEmail: "",
      sendError: false,
      open: false,
    };
  }
  handleClickOpen = (e) => {
    this.setState({ open: true });
  };

  handleClose = (e) => {
    this.setState({ open: false });
    this.setState({ sendError: false });
  };
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") {
      if (!this.validateEmail(value)) {
        this.setState({ errorTextEmail: "Not a valid email address" }, () => {
          console.log(this.state.errorTextEmail);
        });
        this.setState({ [name]: value }, () => {
          console.log(this.state[name]);
        });
      } else {
        this.setState({ [name]: value });
        this.setState({ errorTextEmail: "" }, () => {
          console.log(this.state[name]);
        });
      }
    } else {
      this.setState({ [name]: value }, () => {
        console.log(this.state[name]);
      });
    }
  };
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  onSubmit = (e) => {
    this.setState({ sendError: false });
    if (
      this.state.name.length > 0 &&
      this.state.message.length > 0 &&
      this.state.email.length > 0 &&
      this.state.errorTextEmail.length === 0
    ) {
      e.preventDefault();
      init("user_WXPIhdhFdfgTpqnYfP0m6");
      send("heolo2", "heolo", this.state)
        .then((response) => {
          this.setState({ sendError: "success", open: true });
        })
        .catch((err) => {
          this.setState({ sendError: "error", open: true });
        });
    } else {
      this.setState({ sendError: "error", open: true });
    }
  };
  render() {
    const { classes, t, colore, small } = this.props;
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
          className={colore ? colore : classes.first}
          // style={{ display: "flex", flexWrap: "wrap" }}
        >
          <h2
            className={classes.headTitle}
            id="Contact"
            style={small ? { display: "none" } : {}}
          >
            {t("Contact Us")}
          </h2>
          <div
            style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}
          >
            <div style={{ flex: isMobile() || small ? null : 4 }}>
              <h2
                style={{
                  fontFamily: "Usuzi",
                  color: "white",
                  fontSize: isMobile() || small ? 16 : null,
                }}
              >
                {t("Enter your Full name:")}
              </h2>{" "}
              <TextField
                type="text"
                id="name"
                label="Name"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleChange}
                variant="filled"
                className={classes.inputs}
                size="small"
                fullWidth
                style={{}}
              />
              <h2
                style={{
                  fontFamily: "Usuzi",
                  color: "white",
                  fontSize: isMobile() || small ? 16 : null,
                }}
              >
                {t("Enter your E-mail:")}
              </h2>
              <TextField
                type="text"
                id="email"
                label="Email"
                name="email"
                required
                value={this.state.email}
                onChange={this.handleChange}
                variant="filled"
                className={classes.inputs}
                size="small"
                error={this.state.errorTextEmail.length === 0 ? false : true}
                helperText={this.state.errorTextEmail}
                fullWidth
              />
              <h2
                style={{
                  fontFamily: "Usuzi",
                  color: "white",
                  fontSize: isMobile() || small ? 16 : null,
                }}
              >
                {t("Enter your message:")}
              </h2>
              <TextField
                id="message"
                label="Message"
                name="message"
                multiline
                required
                minRows={4}
                maxRows={14}
                value={this.state.message}
                onChange={this.handleChange}
                variant="filled"
                className={classes.inputs}
                style={{ width: "100%" }}
              />
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  fontFamily: "Usuzi",
                }}
                onClick={this.onSubmit}
              >
                {t("Send Message")}
              </Button>
              {this.state.sendError ? (
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {this.state.sendError === "error"
                      ? t("Error sending emails")
                      : t("Email Sent Successfully")}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {this.state.sendError === "error"
                        ? t(
                            "It seems we have a problem with the contact form. Please send us an email at info@head-audio.it. We will get back to you shortly"
                          )
                        : t(
                            "Thank you for your message, we will be back to you within 48h."
                          )}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>
              ) : null}
            </div>
            <div
              style={{
                color: "white",
                fontFamily: "Usuzi",
                flex: isMobile() || small ? null : 4,
              }}
            >
              {(isMobile() || small) && (
                <>
                  <br /> <br />
                </>
              )}
              <h3
                style={{
                  color: "white",
                  fontSize: isMobile() || small ? 16 : null,
                }}
              >
                E-mail:{" "}
                <a
                  href="mailto:info@head-audio.it"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  info@head-audio.it
                </a>{" "}
                <br /> <br />
                PSC Elettronica Srl
                <br />
                Via Bruno Pontecorvo 4 A/B <br />
                00012 Guidonia
                <br /> <br />
                Mobile: +39 3289439975 <br />
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withTranslation()(withStyles(styles)(Contact));
