import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Description = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("description")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Description);
