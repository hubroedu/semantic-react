import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Card = class extends React.Component {
  render () {
    let {
      type,
      className,
      ...other
    } = this.props;
    
    if (type === "link") {
      return <a {...other} className={this.props.getClasses("ui card")}>
        {this.props.children}
      </a>;
    }
    
    return <div {...other} className={this.props.getClasses("ui card")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Card);
