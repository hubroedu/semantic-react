import React, {PropTypes} from "react";
import { classGenerator, stateSelector, colorSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

let Button = class extends React.Component {
  render () {
    let {
      className,
      type,
      ...others
    } = this.props;
    
    type = type || "div";
    
    return <Unit
      type={type}
      {...others}
      disabled={this.props.getDisabled()}
      active={this.props.getActive()}
      loading={this.props.getLoading()}
      color={this.props.getColor()}
      className={this.props.getClasses("ui", "button")}>
      
      {this.props.children}
    </Unit>;
  }
};

export default classGenerator(stateSelector(colorSelector(Button)));
