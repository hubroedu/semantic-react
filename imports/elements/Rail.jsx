import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Rail = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("ui", "rail")} >
        {this.props.children}
      </div>
    );
  }
};

export default classGenerator(Rail);
