import React, { Component } from "react";
import "styles/backgroundSlides.css";

class BackgroundSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCheck: null
    };
  }

  checkActive = (activeElement, slideNumber) => {
    let isActive;
    if (activeElement === slideNumber) {
      isActive = "active";
    } else {
      isActive = "";
    }
    return isActive;
  };

  checkVideo = activeCheck => {
    if (this.props.video) {
      return (
        <div className={`background-slide ${activeCheck}`}>
          <iframe
            id="bg"
            src="//www.youtube.com/embed/LuD3_umIxgw?autoplay=1"
            className="iframe-background"
          />
        </div>
      );
    } else {
      return (
        <div
          className={`background-slide ${activeCheck}`}
          id={`slide-${this.props.slideNumber}`}
        />
      );
    }
  };

  render() {
    let activeCheck = this.checkActive(
      this.props.activeElement,
      this.props.slideNumber
    );
    return this.checkVideo(activeCheck);

    /*return (
      <div
        className={`background-slide ${activeCheck}`}
        id={`slide-${this.props.slideNumber}`}
      />
    );*/
  }
}

export default BackgroundSlide;
