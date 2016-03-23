import React, {PropTypes} from "react";
import { classGenerator, stateSelector, colorSelector } from "../mixins";

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
      disabled={this.getDisabled()}
      active={this.getActive()}
      loading={this.getLoading()}
      color={this.getColor()}
      className={this.getClasses("ui", "button")}>
      
      {this.props.children}
    </Unit>;
  }
};

Button = classGenerator(Button);
Button = stateSelector(Button);
Button = colorSelector(Button);

export default Button;
