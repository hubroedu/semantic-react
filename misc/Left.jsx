import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Left = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;
    let style = {
      float: "left"
    };
    
    return (
      <div {...other} style={style} className={this.getClasses("left")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(Left);
