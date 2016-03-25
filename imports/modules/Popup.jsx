import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Popup = class extends React.Component {
  componentDidMount () {
    let popup = $(this.refs.pop);
    let container = popup.parent();
    
    container.popup({
      popup,
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
