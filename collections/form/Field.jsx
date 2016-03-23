import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Field = class extends React.Component {
  render () {
    let props = this.props;
    
    return <div className={this.getClasses("field")}>
      {props.children}
    </div>;
  }
};

export default classGenerator(Field);
