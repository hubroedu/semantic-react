import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const TabMenu = class extends React.Component {
  
  componentDidMount () {
    $('.menu .item').tab();
  }
  
  render () {
    return <div className={this.props.getClasses("ui", "menu")}>
      {this.props.children}
    </div>;
  }
};

TabMenu.propTypes = {
  tab: PropTypes.string,
};

export default classGenerator(TabMenu);
