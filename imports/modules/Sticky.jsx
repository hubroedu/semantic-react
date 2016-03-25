import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Sticky = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("ui", "sticky")} >
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
        $(this.getDOMNode()).sticky();
      } else {
        $(this.getDOMNode()).sticky(this.props.init);
      }
    }
  }
};

export default classGenerator(Sticky);
