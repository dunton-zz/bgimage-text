import React, { Component } from "react";
import Waypoint from "react-waypoint";
import "styles/textSection.css";

class TextSection extends Component {
  constructor(props) {
    super(props);
  }

  textSectionEnter = () => {
    this.props.enterWaypoint(this.props.sectionPosition);
  };

  render() {
    return (
      <Waypoint onEnter={this.textSectionEnter}>
        <section className="section-holder">
          <div className="content-placement">
            <div className="body-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                placerat lorem quam, eget consectetur elit iaculis porta. Morbi
                vehicula nec odio nec tristique. Pellentesque rhoncus ex
                ultricies tincidunt laoreet. Morbi sagittis lacus velit, eu
                convallis odio pretium at. Nunc eu tincidunt lorem. Nam non nisi
                vitae diam maximus varius fringilla vitae leo. Nulla sed quam
                nisi. Cras hendrerit, metus eget efficitur sagittis, leo dui
                tempor metus, non placerat urna ante et nisi. Etiam interdum
                justo non arcu dapibus, ac ultricies libero posuere. Donec nec
                sagittis justo. Etiam laoreet felis a magna laoreet, vehicula
                tincidunt augue pulvinar. Quisque tempor commodo quam mattis
                elementum. Donec blandit lectus vel dui auctor, tempor sodales
                nibh semper. Nunc auctor tempus volutpat.
              </p>

              <p>
                Donec consequat non ipsum quis semper. Ut volutpat quis orci id
                interdum. Nulla eget bibendum dui. Nam vel arcu lectus. Integer
                ut dui eu dui laoreet faucibus. Aliquam erat volutpat. Etiam a
                diam sapien. Nulla consectetur dui vel turpis dapibus molestie.
              </p>

              <p>
                Suspendisse in magna vitae erat fringilla congue. Nunc aliquet
                cursus lobortis. Nunc elementum hendrerit turpis, ac vulputate
                nisl sollicitudin ac. Vestibulum dui magna, auctor nec enim ut,
                eleifend pharetra urna. Pellentesque blandit, lectus eget tempor
                aliquam, urna magna imperdiet sem, egestas tristique tortor
                nulla egestas urna. Praesent ac bibendum nulla. Vestibulum
                accumsan risus commodo, varius tellus sit amet, tincidunt
                lectus.
              </p>
            </div>
          </div>
        </section>
      </Waypoint>
    );
  }
}

export default TextSection;
