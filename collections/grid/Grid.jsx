import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";


const Grid = class extends React.Component {
  render () {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.getClasses("ui", "grid")}>
      {this.props.children}
    </div>;
  }
};

Grid = classGenerator(Grid);

export default Grid;