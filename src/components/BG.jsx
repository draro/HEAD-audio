import React from "react";
import AnimatedBg from "react-animated-bg";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesList: [
        'url("assets/bg.png")',
        'url("assets/bg.png")',
        'url("assets/bg.png")',
      ],
    };
  }
  render() {
    return (
      <AnimatedBg
        colors={this.state.imagesList}
        duration={2}
        delay={1}
        timingFunction="ease-out"
      >
        <div className="App">
          <h1>Animated images</h1>
          <h3>- duration: 2s</h3>
          <h3>- delay: 1s</h3>
          <h3>- transition type: ease-out</h3>
        </div>
      </AnimatedBg>
    );
  }
}
