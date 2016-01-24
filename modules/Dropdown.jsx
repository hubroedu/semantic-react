Dropdown = React.createClass({
  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, color, type, error, disable, active, ...other} = this.props;

    if (this.getActive() || this.getDisabled()) {
      defaultClassName += ' simple';
    }

    return (
      <Unit {...other}
        className={this.getClasses("ui", "dropdown")}
        color="null"
        type="div"
        error={this.getError()}
        disable={this.getDisabled()}
        active={this.getActive()}>
        
        <input type="hidden" name={this.props.name} />
        <i className="dropdown icon"></i>
        <div className="default text">{this.props.default}</div>
        <div className="menu">
          {this.props.options.map((item) => {
            return <div key={item.value} className="item" data-value={item.value}>
              {item.name}
            </div>
          })}
        </div>
      </Unit>
    );
  },

  componentDidMount () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }
      
      let opts = {};
      if (this.props.onChange) {
        console.log("adding onchange to dropdown");
        opts.onChange = (value, label, el) => {
          let name = this.props.name;
          this.props.onChange(name, value, el);
        }
      }
      $(ReactDOM.findDOMNode(this)).dropdown(opts);
    }
  }
});