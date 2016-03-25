import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Field = class extends React.Component {
  render () {
    let props = this.props;
    
    return <div className={this.props.getClasses("field")}>
      {props.children}
    </div>;
  }
};

export default classGenerator(Field);
