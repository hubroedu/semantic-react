import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";


const Grid = class extends React.Component {
  render () {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.props.getClasses("ui", "grid")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Grid);
