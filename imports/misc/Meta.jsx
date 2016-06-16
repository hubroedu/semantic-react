import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Meta = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("meta")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Meta);
