import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Content = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("content")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Content);
