import React, {PropTypes} from "react";
import { classGenerator, colorSelector, stateSelector } from "../mixins";

const Segment = class extends React.Component {
  render () {
    let {className, children, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "segment")}
        type="div"
        color={this.getColor()}
        disabled={this.getDisabled()}
        loading={this.getLoading()}>
        
        {children}
      </Unit>
    );
  }
};

export default classGenerator(colorSelector(stateSelector(Segment)));

