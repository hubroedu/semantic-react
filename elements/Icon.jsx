import React, {PropTypes} from "react";
import { classGenerator, colorSelector, stateSelector } from "../mixins";

const Icon = class extends React.Component {
  render () {
    let {className, icon, color, ...other} = this.props;

    return (
      <i {...other}
        className={this.getClasses("icon") + " " + icon}
        type="icon"
        color={this.getColor()}
        disabled={this.getDisabled()}
        loading={this.getLoading()} />
    );
  }
};

export default classGenerator(colorSelector(stateSelector(Icon)));
