import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Reveal = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "reveal")}
        type="div"
        color="null"
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Reveal));
