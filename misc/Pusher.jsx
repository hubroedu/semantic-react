import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Pusher = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("pusher")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Pusher);
