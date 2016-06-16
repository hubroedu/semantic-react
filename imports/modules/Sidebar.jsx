import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Sidebar = class extends React.Component {
  render () {
    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.props.getClasses("ui", "sidebar")} ref="sidebar">
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
        $(this.refs.sidebar).sidebar();
      } else {
        $(this.refs.sidebar).sidebar(this.props.init);
      }
    }
  }
};

export default classGenerator(Sidebar);
