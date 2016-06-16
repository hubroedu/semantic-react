import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Tab = class extends React.Component {
  
  render () {
    return <a className={(this.props.active ? "active " : "") + "item"} data-tab={this.props.tab}>
      {this.props.children}
    </a>;
  }
};

Tab.propTypes = {
  tab: PropTypes.string,
};

export default classGenerator(stateSelector(Tab));
