/* eslint-disable no-useless-computed-key */
import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { TextField } from "@material-ui/core";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      send("heolo", "heolo", this.state)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          this.setState({ sendError: true, open: true });
        });
    } else {
      this.setState({ sendError: true, open: true });
    }
  };
  render() {
    const { classes, t, colore } = this.props;
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
          <h2 className={classes.headTitle} id="Contact">
            {t("Contact Us")}
          </h2>
          <div
            style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}
          >
            <div style={{ flex: isMobile() ? null : 4 }}>
              <h2
                style={{
                  fontFamily: "Usuzi",
                  color: "white",
                  fontSize: isMobile() ? 16 : null,
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
                  fontSize: isMobile() ? 16 : null,
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
                  fontSize: isMobile() ? 16 : null,
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
                    {t("Error sending emails")}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {t(
                        "It seems we have a problem with the contact form. Please send us an email at info@head-audio.it. We will get back to you shortly"
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
                flex: isMobile() ? null : 4,
              }}
            >
              {isMobile() && (
                <>
                  <br /> <br />
                </>
              )}
              <h3 style={{ color: "white", fontSize: isMobile() ? 16 : null }}>
                E-mail:{" "}
                <a
                  href="mailto:info@head-audio.it"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  info@head-audio.it
                </a>{" "}
                <br /> <br />
                Lab: Via G.Pascoli, 12 - 00010
                <br /> <br />
                Setteville (RM)
                <br /> <br />
                Mobile: +39 335 7557983 <br /> <br />
                Mobile: +39 335 7557984 <br /> <br />
                Phone: 0774-391045
                <br /> <br />
                FAX: +39 06 233233590
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withTranslation()(withStyles(styles)(Contact));
