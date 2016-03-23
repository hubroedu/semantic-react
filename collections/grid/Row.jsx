import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Row = class extends React.Component {
  render () {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.getClasses("row")}>
      {this.props.children}
    </div>;
  }
};

Row = classGenerator(Row);

export default Row;
