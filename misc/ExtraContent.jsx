import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const ExtraContent = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("extra content")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(ExtraContent);
