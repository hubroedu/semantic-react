import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";
import Icon from "./Icon.jsx";


const Input = class extends React.Component {
  
  constructor (props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.render = this.render.bind(this);
  }
  
  handleChange (e) {
    let value = e.target.value;
    let name = this.props.name;
    
    if (this.props.type === "number") {
      value = +value;
    }

    if (this.props.onChange) {
      this.props.onChange(name, value, e);
    }
  }
  
  render () {
    let {
      label,
      id,
      name,
      placeholder,
      type,
      rows,
      min,
      max,
      step,
      icon,
      children,
      ...other
    } = this.props;
    
    if (!type) {
      type = "text";
    }
    
    let classes = "";
    
    id = id || `input_${name}`;
    
    if (label) classes += " labeled";
    
    return (
      <div className={this.props.getClasses("ui", "input")}>
        
        {icon ?
          <Icon icon={icon} /> : null}
        
        {label ?
          <label for={id}>{label}</label> : null}
        
        {type === "textarea" ?
          <textarea
            {...other}
            id={id}
            rows={rows}
            name={name}
            onChange={this.handleChange} /> :
          <input
            {...other}
            id={id}
            type={type}
            name={name}
            min={min}
            max={max}
            step={step}
            onChange={this.handleChange}
            placeholder={placeholder} />
        }
        
        {children}
      </div>
    );
  }
};

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default classGenerator(stateSelector(Input));
