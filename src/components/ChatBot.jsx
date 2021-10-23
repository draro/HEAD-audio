import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Contacts from "./Contacts";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
// all available config props
const config = {
  width: "300px",
  height: "400px",
  floating: true,
};

export class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: "",
      email: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, message, email } = steps;
    this.setState({ name, message, email });
  }

  render() {
    const { name, message, email } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{message.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Bot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      email: "",
    };
  }
  onSubmit({ steps, values }) {
    console.log(steps, values);
    console.log(this.state.name, this.state.email, this.state.message);
    const name = values[1];
    const email = values[2];
    const message = values[3];
    console.log(name, message, email);
    this.setState({ name, message, email }, () => console.log());
    // this.setState({ sendError: false });
    if (name.length > 0 && message.length > 0 && email.length > 0) {
      //   e.preventDefault();
      init("user_WXPIhdhFdfgTpqnYfP0m6");
      send("heolo2", "heolo", this.state)
        .then((response) => {
          //   this.setState({ sendError: "success", open: true });
          alert("message sent");
        })
        .catch((err) => {
          //   this.setState({ sendError: "error", open: true });
          alert("could not sent the message");
        });
    } else {
      //   this.setState({ sendError: "error", open: true });
      alert("could not sent the message");
    }
  }
  render() {
    return (
      <ChatBot
        handleEnd={this.onSubmit}
        steps={[
          {
            id: "intro",
            message: "Hi! Thanks for reaching to us! How can I help you?",
            trigger: "intro-user",
          },
          {
            id: "intro-user",
            options: [
              {
                value: "Product Prices",
                label: "Product Prices",
                trigger: "yes-response",
              },
              {
                value: "Product General Info",
                label: "Product General Info",
                trigger: "1",
              },
            ],
          },

          {
            id: "yes-response",
            message: "What is the product?",
            trigger: "product-names",
          },
          {
            id: "product-names",
            options: [
              {
                value: "Heolo Series",
                label: "Heolo Series",
                trigger: "1",
              },
              { value: "MUSICA", label: "MUSICA", trigger: "1" },
              { value: "TULIP", label: "TULIP", trigger: "1" },
            ],
          },
          {
            id: "1",
            message: "Please enter your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}! What is your email?",
            trigger: "email",
          },
          {
            id: "email",
            user: true,
            trigger: "5",
            validator: (email) => {
              const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
            },
          },
          {
            id: "5",
            message: "Please type your message.",
            trigger: "message",
          },
          {
            id: "message",
            user: true,
            trigger: "7",
          },
          {
            id: "7",
            message: "Great! Check out your summary",
            trigger: "review",
          },
          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "update",
          },
          {
            id: "update",
            message: "Do you want to update the information?",
            trigger: "update-question",
          },
          {
            id: "update-question",
            options: [
              { value: "yes", label: "Yes", trigger: "update-yes" },
              { value: "no", label: "No", trigger: "end-message" },
            ],
          },
          {
            id: "update-yes",
            message: "What field would you like to update?",
            trigger: "update-fields",
          },
          {
            id: "update-fields",
            options: [
              { value: "name", label: "Name", trigger: "update-name" },
              { value: "email", label: "Email", trigger: "update-gender" },
              { value: "message", label: "Message", trigger: "update-age" },
            ],
          },
          {
            id: "update-name",
            update: "name",
            trigger: "7",
          },
          {
            id: "update-gender",
            update: "email",
            trigger: "7",
          },
          {
            id: "update-age",
            update: "message",
            trigger: "7",
          },
          {
            id: "end-message",
            message: "Thanks! Your data was submitted successfully!",
            end: true,
          },
        ]}
        {...config}
      />
    );
  }
}

export default Bot;
