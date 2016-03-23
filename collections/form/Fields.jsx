import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Fields = class extends React.Component {
  render () {
    let props = this.props;
    
    return <div className={this.getClasses("fields")}>
      {this.props.children}
    </div>;
  }
};

Fields = classGenerator(Fields);

export default Fields;
