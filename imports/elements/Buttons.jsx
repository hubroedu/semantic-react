import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Buttons = class extends React.Component {
  render () {
    let {
      className,
      ...others
    } = this.props;
    
    return <div {...others} className={this.props.getClasses("ui", "buttons")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Buttons);
