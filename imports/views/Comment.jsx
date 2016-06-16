import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Comment = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("comment")} >
        {this.props.children}
      </div>
    );
  }
};

export default classGenerator(Comment);
