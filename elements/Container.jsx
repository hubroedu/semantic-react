import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

let Container = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "container")}>
        {children}
      </div>
    );
  }
};

Container = classGenerator(Container);

export default Container;
