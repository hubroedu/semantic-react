Statistic = React.createClass({
  mixins: [Mixins.classGenerator],
  
  renderHorizontal (args) {
    const {
      label,
      value,
      change,
      formatter,
      changeLabel,
      ...other
    } = args;
    
    return (
      <div {...other} className={this.getClasses("ui", "statistic")}>
        <div className="value">
          {formatter ? formatter(value) : value}
          
          {_.isDefined(changeLabel) ? changeLabel : null}
        </div>
        
        
        {label ?
          <div className="label">
            {label}
          </div>
        : null}
        

      </div>
    );
  },
  
  renderVertical (args) {
    const {
      label,
      value,
      change,
      formatter,
      changeLabel,
      ...other
    } = args;
    
    return (
      <div {...other} className={this.getClasses("ui", "statistic")}>
        <div className="value">
          {formatter ? formatter(value) : value}
        </div>
        
        {label ?
          <div className="label">
            {label}
          </div>
        : null}

        {_.isDefined(changeLabel) ? changeLabel : null}
      </div>
    );
  },
  
  render () {
    const {
      label,
      value,
      change,
      formatter,
      className,
      ...other
    } = this.props;
    
    let changeLabel = null;
    
    if (_.isDefined(change)) {
      changeLabel = (
        <div className="label">
          <Icon icon={change >= 0 ? "green chevron up" : "red chevron down"} />
          {formatter ? formatter(change) : change}
        </div>
      );
    }
    
    const horizontal = className && className.indexOf("horizontal") >= 0;
    const args = { label, value, change, formatter, changeLabel, ...other };
    
    if (horizontal) {
      return this.renderHorizontal(args);
    }
    
    return this.renderVertical(args);
    
    
  }
});
