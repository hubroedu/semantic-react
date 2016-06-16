import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const List = class extends React.Component {
  render () {
    return <div className={this.props.getClasses("ui", "list")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(List);
