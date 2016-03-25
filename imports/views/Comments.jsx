import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Comments = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("ui", "comments")} >
        {this.props.children}
      </div>
    );
  }
};

export default classGenerator(Comments);
