import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

const Reveal = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.props.getClasses("ui", "reveal")}
        type="div"
        color="null"
        disabled={this.props.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Reveal));
