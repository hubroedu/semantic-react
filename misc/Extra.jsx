import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Extra = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("extra")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Extra);
