import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const isDefined = val => !_.isUndefined(val) && !_.isNull(val);

const RadioGroup = class extends React.Component {
  
  componentWillReceiveProps (newProps) {
    const defaultValue = this.props.defaultValue;
    // isDefined checks for not undefined and not null
    if (!isDefined(defaultValue) && isDefined(newProps.defaultValue)) {
      this.setChecked(newProps.defaultValue);
    }
  }
  
  setChecked (value) {
    $(this.refs.checkboxes)
      .find(".ui.radio.checkbox input[value=" + value + "]")
      .parent()
        .checkbox("check");
  }
  
  componentDidMount () {
    let component = this;
    
    $(this.refs.checkboxes).find(".ui.radio.checkbox").checkbox({
      onChecked: function () { component.onChange($(this).attr("value")); },
    });
    
    const defaultValue = this.props.defaultValue;
    
    if (defaultValue) {
      this.setChecked(defaultValue);
    }
  }
  
  onChange (value, a) {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value);
    }
  }
  
  render () {
    let name = this.props.name;
    
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { name });
    });

    return (
      <div className={this.props.getClasses("field")} ref="checkboxes">
        {childrenWithProps}
      </div>
    );
  }
};

export default classGenerator(RadioGroup);
