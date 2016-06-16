import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Cards = class extends React.Component {
  render () {
    return <div className={this.props.getClasses("ui cards")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Cards);
