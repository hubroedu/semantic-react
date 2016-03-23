import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

let Buttons = class extends React.Component {
  render () {
    let {
      className,
      ...others
    } = this.props;
    
    return <div {...others} className={this.getClasses("ui", "buttons")}>
      {this.props.children}
    </div>;
  }
};

Buttons = classGenerator(Buttons);

export default Buttons;
