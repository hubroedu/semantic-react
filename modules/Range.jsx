Range = React.createClass({
  mixins: [
    Mixins.classGenerator,
    Mixins.stateSelector,
  ],
  
  propTypes: {

  },
  
  onChange (e) {
    let value = +this.refs.range.value;
    let {name, onChange} = this.props;
    
    this.setState({ value });
    
    if (onChange) {
      onChange(name, value);
    }
  },
  
  getInitialState () {
    return {
      value: this.props.defaultValue || 0
    }
  },
  
  render() {
    let {
      className,
      active, success, warning, error, disabled,
      ...other
    } = this.props;

    let state = {
      active: this.getActive(),
      success: this.getSuccess(),
      warning: this.getWarning(),
      error: this.getError(),
      disabled: this.getDisabled()
    };

    return (
      <Grid className="two column">
        <Column>
          <input
            {...other}
            type="range"
            onChange={this.onChange}
            className={this.getClasses("ui range", state)}
            ref="range" />
        </Column>
        <Column>
          <div className="label">
            {this.state.value}
          </div>
        </Column>
      </Grid>
    );
  },

});
