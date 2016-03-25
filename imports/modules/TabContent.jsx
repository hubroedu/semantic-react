import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const TabContent = class extends React.Component {
  
  render () {
    let {
      className,
      active,
      tab,
      ...other
    } = this.props;
    
    let state = {
      active: this.props.getActive(),
    };
    
    return <div {...other}
        data-tab={tab}
        className={this.props.getClasses("ui tab", state)}>
        
        {this.props.children}
      </div>;
  }
};

TabContent.propTypes = {
  tab: PropTypes.string,
};

export default classGenerator(stateSelector(TabContent));
