import React, {PropTypes} from "react";
import { classGenerator, colorSelector, stateSelector } from "../mixins";

const Icon = class extends React.Component {
  render () {
    let {className, icon, color, ...other} = this.props;

    return (
      <i {...other}
        className={this.props.getClasses("icon") + " " + icon}
        type="icon"
        color={this.props.getColor()}
        disabled={this.props.getDisabled()}
        loading={this.props.getLoading()} />
    );
  }
};

export default classGenerator(colorSelector(stateSelector(Icon)));
