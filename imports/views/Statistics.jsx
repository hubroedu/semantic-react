import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Statistics = class extends React.Component {
  render () {
    let props = this.props;
    
    return <div className={this.props.getClasses("ui", "statistics")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Statistics);