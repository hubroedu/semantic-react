import React, {PropTypes} from "react";
import { classGenerator, colorSelector, stateSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

const Segment = class extends React.Component {
  render () {
    let {className, children, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.props.getClasses("ui", "segment")}
        type="div"
        color={this.props.getColor()}
        disabled={this.props.getDisabled()}
        loading={this.props.getLoading()}>
        
        {children}
      </Unit>
    );
  }
};

export default classGenerator(colorSelector(stateSelector(Segment)));

