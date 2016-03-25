import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const SubHeader = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("sub", "header")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(SubHeader);
