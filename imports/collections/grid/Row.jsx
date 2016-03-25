import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Row = class extends React.Component {
  render () {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.props.getClasses("row")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Row);
