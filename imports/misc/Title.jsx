import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Title = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("title")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Title);
