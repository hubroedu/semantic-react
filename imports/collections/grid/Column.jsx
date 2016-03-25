import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Column = class extends React.Component {
  render () {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.props.getClasses("", "column")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Column);
