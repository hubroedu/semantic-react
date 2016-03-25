import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Loader = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.props.getClasses("ui", "loader")}
        type="div"
        color="null"
        disabled={this.props.getDisabled()}
        active={this.props.getActive()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Loader));
