Input = React.createClass({
  
  mixins: [Mixins.classGenerator, Mixins.stateSelector],
  
  propTypes: {
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    type: React.PropTypes.string,
    rows: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
  },
  
  handleChange (e) {
      let value = e.target.value;
      let name = this.props.name;

      if (this.props.onChange) {
        this.props.onChange(name, value, e);
      }
  },
  
  render() {
    let {
      label,
      name,
      placeholder,
      type,
      rows,
      min,
      max,
      step,
      children,
      ...other
    } = this.props;
    
    if (!type) {
      type = "text";
    }
    
    let classes = "";
    
    if (label) classes += " labeled";
    
    return (
      <div className={this.getClasses("ui", "input")}>
        
        {label ?
          <div className="ui label">{label}</div>: null}
        
        {type === "textarea" ?
          <textarea
            {...other}
            rows={rows}
            name={name}
            onChange={this.handleChange} /> :
          <input
            {...other}
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
});