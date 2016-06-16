import _ from "lodash";
import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";
import Icon from "../elements/Icon.jsx";

const isDefined = val => !_.isUndefined(val) && !_.isNull(val);

const Statistic = class extends React.Component {
  renderHorizontal (args) {
    const {
      label,
      value,
      change,
      formatter,
      changeLabel,
      icon,
      ...other
    } = args;
    
    return (
      <div {...other} className={this.props.getClasses("ui", "statistic")}>
        <div className="value">
          {icon ? <i className={icon + " icon"} /> : null}
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
      formatter,
      changeElement,
      valueStyle,
      labelAbove,
      icon,
      ...other
    } = args;
    
    return (
      <div {...other} className={this.props.getClasses("ui", "statistic")}>
        {labelAbove ?
          <div className="label">
            {labelAbove}
          </div>
        : null}
      
        <div className="value" style={valueStyle}>
          {icon ? <i className={icon + " icon"} /> : null}
          {formatter ? formatter(value) : value}
        </div>
        
        {label ?
          <div className="label">
            {label}
          </div>
        : null}

        {isDefined(changeElement) ? changeElement : null}
      </div>
    );
  }
  
  render () {
    const {
      label,
      value,
      change,
      formatter,
      changeFormatter,
      className,
      changeLabel,
      ...other
    } = this.props;
    
    let changeElement = null;
    
    let icon = "grey minus";
    if (change > 0) {
      icon = "green chevron up";
    } else if (change < 0) {
      icon = "red chevron down";
    }
    
    if (isDefined(change)) {
      changeElement = (
        <div className="label">
          <Icon icon={icon } />
          {changeFormatter ? changeFormatter(change) : change} {changeLabel ? changeLabel : ""}
        </div>
      );
    }
    
    const horizontal = className && className.indexOf("horizontal") >= 0;
    const args = { label, value, change, formatter, changeElement, ...other };
    
    if (horizontal) {
      return this.renderHorizontal(args);
    }
    
    return this.renderVertical(args);
  }
};

Statistic.propTypes = {
  label: PropTypes.string,
  labelAbove: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  change: PropTypes.number,
  changeLabel: PropTypes.string,
  formatter: PropTypes.func,
  changeFormatter: PropTypes.func,
};

export default classGenerator(Statistic);
