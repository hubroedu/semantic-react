Button = React.createClass({
  mixins: [Mixins.classGenerator, Mixins.stateSelector, Mixins.colorSelector],
  
  render () {
    let {
      className,
      type,
      ...others
    } = this.props;
    
    type = type || "div";
    
    return <Unit
      type={type}
      {...others}
      disabled={this.getDisabled()}
      active={this.getActive()}
      loading={this.getLoading()}
      color={this.getColor()}
      className={this.getClasses("ui", "button")}>
      
      {this.props.children}
    </Unit>;
  }
});
