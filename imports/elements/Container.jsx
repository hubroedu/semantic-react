import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Container = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("ui", "container")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Container);
