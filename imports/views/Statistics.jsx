import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Statistics = class extends React.Component {
  render () {
    let { className, ...other } = this.props;
    
    return <div className={this.props.getClasses("ui", "statistics")} {...other}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Statistics);
