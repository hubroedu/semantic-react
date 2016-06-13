import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Popup = class extends React.Component {
  componentDidMount () {
    let popup = $(this.refs.pop);
    let container = popup.parent();
    const opts = this.props.init || {};
    
    container.popup({
      popup,
      ...opts
    });
  }

  render () {
    return (
      <div ref="pop" className={this.props.getClasses("ui", "popup")} >
        {this.props.children}
      </div>
    );
  }
};

export default classGenerator(Popup);
