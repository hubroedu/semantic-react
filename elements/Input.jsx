Input = React.createClass({
  
  propTypes: {

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
      ...other
    } = this.props;
    
    if (!type) {
      type = "text";
    }
    
    return (
      <div>
        <label>{label}</label>
        {type === "textarea" ?
          <textarea
            {...other}
            name={name}
            onChange={this.handleChange} /> :
          <input
            {...other}
            type={type}
            name={name}
            onChange={this.handleChange}
            placeholder={placeholder} />
        }
      </div>
    );
  }
});