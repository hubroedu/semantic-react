import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Fields = class extends React.Component {
  render () {
    let props = this.props;
    
    return <div className={this.props.getClasses("fields")}>
      {this.props.children}
    </div>;
  }
};

export default classGenerator(Fields);
