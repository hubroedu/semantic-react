RadioInput = React.createClass({
  render () {
    return (
      <div className="field">
        <div className="ui radio checkbox">
          
          <input
            {...this.props}
            type="radio"
            className="hidden"
            value={this.props.value}
            name={this.props.name} />
          
          <label data-radio-name={this.props.name}>{this.props.label}</label>
        </div>
      </div>
    );
  },
});

RadioGroup = React.createClass({
  mixins: [Mixins.classGenerator],
  
  componentDidMount () {
    let component = this;
    
    $(this.refs.checkboxes).find(".ui.radio.checkbox").checkbox({
      onChecked: function () { component.onChange($(this).attr("value")); },
    });
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

