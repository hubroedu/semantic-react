import _ from "lodash";
import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const isDefined = val => !_.isUndefined(val) && !_.isNull(val);

const Statistic = class extends React.Component {
  renderHorizontal (args) {
    const {
      label,
      value,
      change,
      formatter,
      changeLabel,
      ...other
    } = args;
    
    return (
      <div {...other} className={this.props.getClasses("ui", "statistic")}>
        <div className="value">
          {formatter ? formatter(value) : value}
          
          {isDefined(changeLabel) ? changeLabel : null}
        </div>
        
        
        {label ?
          <div className="label">
            {label}
          </div>
        : null}
        

      </div>
    );
  }
  
  renderVertical (args) {
    const {
      label,
      value,
      change,
      formatter,
      changeLabel,
      ...other
    } = args;
    
    return (
      <div {...other} className={this.props.getClasses("ui", "statistic")}>
        <div className="value">
          {formatter ? formatter(value) : value}
        </div>
        
        {label ?
          <div className="label">
            {label}
          </div>
        : null}

        {isDefined(changeLabel) ? changeLabel : null}
      </div>
    );
  }
  
  render () {
    const {
      label,
      value,
      change,
      formatter,
      className,
      ...other
    } = this.props;
    
    let changeLabel = null;
    
    let icon = "grey minus";
    if (change > 0) {
      icon = "green chevron up";
    } else if (change < 0) {
      icon = "red chevron down";
    }
    
    if (isDefined(change)) {
      changeLabel = (
        <div className="label">
          <Icon icon={icon } />
          {formatter ? formatter(change) : change}
        </div>
      );
    }
    
    const horizontal = className && className.indexOf("horizontal") >= 0;
    const args = { label, value, change, formatter, changeLabel, ...other };
    
    if (horizontal) {
      return this.renderHorizontal(args);
    }
    
    return this.renderVertical(args);
  }
};

export default classGenerator(Statistic);
