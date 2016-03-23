import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Step = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("step")}
        type="div"
        color="null"
        active={this.getActive()}
        completed={this.getCompleted()}
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Step));
