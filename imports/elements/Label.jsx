import React, {PropTypes} from "react";
import { classGenerator, colorSelector, typeSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

const Label = class extends React.Component {
  render () {
    let {className, type, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.props.getClasses("ui", "label")}
        type={this.props.getType()}
        color={this.props.getColor()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(colorSelector(typeSelector(Label)));
