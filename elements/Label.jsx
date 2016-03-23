import React, {PropTypes} from "react";
import { classGenerator, colorSelector, typeSelector } from "../mixins";

const Label = class extends React.Component {
  render () {
    let {className, type, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "label")}
        type={this.getType()}
        color={this.getColor()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(colorSelector(typeSelector(Label)));
