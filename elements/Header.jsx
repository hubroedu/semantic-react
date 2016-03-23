import React, {PropTypes} from "react";
import { classGenerator, colorSelector, typeSelector, stateSelector } from "../mixins";


const Header = class extends React.Component {
  render () {
    let {className, type, children, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "header")}
        type={this.getType()}
        color={this.getColor()}
        disabled={this.getDisabled()}>
        {children}
      </Unit>
    );
  }
};

export default classGenerator(colorSelector(typeSelector(stateSelector(Header))));


const SubHeader = class extends React.Component {
  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("sub", "header")}>
        {children}
      </div>
    );
  }
};

export default classGenerator(SubHeader);
