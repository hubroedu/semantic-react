import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Breadcrumb = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "breadcrumb")} >
        {this.props.children}
      </div>
    );
  }
};

Breadcrumb = classGenerator(Breadcrumb);

export default Breadcrumb;
