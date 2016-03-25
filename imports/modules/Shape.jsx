import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Shape = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("ui", "shape")} ref="shape">
        {this.props.children}
      </div>
    );
  }

  componentDidMount () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.shape).shape();
      } else {
        $(this.refs.shape).shape(this.props.init);
      }
    }
  }
};

export default classGenerator(Shape);
