import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Items = class extends React.Component {
  render () {
    return <div className={this.props.getClasses("ui items")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Items);
