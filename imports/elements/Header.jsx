import React, {PropTypes} from "react";
import { classGenerator, colorSelector, typeSelector, stateSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

const Header = class extends React.Component {
  render () {
    let {className, type, children, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.props.getClasses("ui", "header")}
        type={this.props.getType()}
        color={this.props.getColor()}
        disabled={this.props.getDisabled()}>
        {children}
      </Unit>
    );
  }
};

export default classGenerator(colorSelector(typeSelector(stateSelector(Header))));

