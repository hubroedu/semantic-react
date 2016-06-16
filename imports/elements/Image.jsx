import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

const Image = class extends React.Component {
  render () {
    let {className, type, disabled, src, ...other} = this.props;
    let uiClass = "";
    
    if (src) {
      type = "img";
      uiClass = "ui";
    } else {
      type = "div";
    }

    return (
      <Unit {...other}
        src={src}
        className={this.props.getClasses(uiClass, "image")}
        type={type}
        color="null"
        disabled={this.props.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Image));
