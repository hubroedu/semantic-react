import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Column = class extends React.Component {
  render () {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.getClasses("", "column")}>
      {this.props.children}
    </div>;
  }
};

Column = classGenerator(Column);

export default Column;
