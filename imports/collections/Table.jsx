import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Table = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <table {...other} className={this.props.getClasses("ui", "table")} >
        {this.props.children}
      </table>
    );
  }
};

export default classGenerator(Table);
