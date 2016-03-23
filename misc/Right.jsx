import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Right = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;
    let style = {
      float: "right"
    };
    
    return (
      <div {...other} style={style} className={this.getClasses("right")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Right);
