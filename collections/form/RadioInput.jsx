const isDefined = val => !_.isUndefined(val) && !_.isNull(val);

RadioInput = React.createClass({
  render () {
    const {
      name,
      value,
      label,
      ...other
    } = this.props;
    
    return (
      <div className="field">
        <div className="ui radio checkbox">
          
          <input
            {...other}
            type="radio"
            className="hidden"
            value={value}
            name={name} />
          
          <label data-radio-name={name}>{label}</label>
        </div>
      </div>
    );
  },
});

RadioGroup = React.createClass({
  mixins: [Mixins.classGenerator],
  
  componentWillReceiveProps (newProps) {
    const defaultValue = this.props.defaultValue;
    // isDefined checks for not undefined and not null
    if (!isDefined(defaultValue) && isDefined(newProps.defaultValue)) {
      this.setChecked(newProps.defaultValue);
    }
  },
  
  setChecked (value) {
    $(this.refs.checkboxes)
      .find(".ui.radio.checkbox input[value=" + value + "]")
      .parent()
        .checkbox("check");
  },
  
  componentDidMount () {
    let component = this;
    
    $(this.refs.checkboxes).find(".ui.radio.checkbox").checkbox({
      onChecked: function () { component.onChange($(this).attr("value")); },
    });
    
    const defaultValue = this.props.defaultValue;
    
    if (defaultValue) {
      this.setChecked(defaultValue);
    }
  },
  
  onChange (value, a) {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value);
    }
  },
  
  render() {
    let name = this.props.name;
    
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { name });
    });

    return (
      <div className={this.getClasses("field")} ref="checkboxes">
        {childrenWithProps}
      </div>
    );
  }
});

