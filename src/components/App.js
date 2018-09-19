import React, { Component } from "react";
import BackgroundSlide from "./BackgroundSlide";
import TextSection from "./TextSection";
import "styles/general.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeElement: 1
    };
  }

  enterWaypoint = sectionPosition => {
    this.setState(prevState => {
      return { activeElement: sectionPosition };
    });
    console.log(this.state.activeElement);
  };

  render() {
    return (
      <div id="container">
        <BackgroundSlide
          slideNumber={1}
          activeElement={this.state.activeElement}
        />
        <BackgroundSlide
          slideNumber={2}
          activeElement={this.state.activeElement}
        />
        <BackgroundSlide
          slideNumber={3}
          activeElement={this.state.activeElement}
        />
        <BackgroundSlide
          slideNumber={4}
          activeElement={this.state.activeElement}
        />
        <BackgroundSlide
          slideNumber={5}
          activeElement={this.state.activeElement}
        />
        <TextSection enterWaypoint={this.enterWaypoint} sectionPosition={1} />
        <TextSection enterWaypoint={this.enterWaypoint} sectionPosition={2} />
        <TextSection enterWaypoint={this.enterWaypoint} sectionPosition={3} />
        <TextSection enterWaypoint={this.enterWaypoint} sectionPosition={4} />
        <TextSection enterWaypoint={this.enterWaypoint} sectionPosition={5} />
      </div>
    );
  }
}

export default App;
