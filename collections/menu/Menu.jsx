import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Menu = class extends React.Component {
  render () {
    let {className, ...other} = this.props;
    
    return <div {...other} className={this.getClasses("ui", "menu")}>
      {this.props.children}
    </div>;
  }
};

Menu = classGenerator(Menu);

export default Menu;
