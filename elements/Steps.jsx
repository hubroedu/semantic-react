import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Steps = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "steps")} >
        {this.props.children}
      </div>
    );
  }
};

export default classGenerator(Steps);
