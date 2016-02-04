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
          
          <label>{this.props.label}</label>
        </div>
      </div>
    );
  },
});

RadioGroup = React.createClass({
  componentDidMount () {
    $(".ui.radio.checkbox").checkbox({
      onChange: this.onChange
    });
  },
  
  onChange (value) {
    console.log(value);
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
      <div className="field">
        {childrenWithProps}
      </div>
    );
  }
});

