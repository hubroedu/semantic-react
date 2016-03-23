import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

let Divider = class extends React.Component {
  render () {
    return (
      <div className={this.getClasses("ui", "divider")}>
        {this.props.children}
      </div>
    );
  }
};

Divider = classGenerator(Divider);

export default Divider;
