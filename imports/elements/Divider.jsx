import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Divider = class extends React.Component {
  render () {
    return (
      <div className={this.props.getClasses("ui", "divider")}>
        {this.props.children}
      </div>
    );
  }
};

export default classGenerator(Divider);
