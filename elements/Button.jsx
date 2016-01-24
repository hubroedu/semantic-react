Button = React.createClass({
  mixins: [Mixins.classGenerator, Mixins.stateSelector, Mixins.colorSelector],
  
  render() {
    let {
      className,
      ...others
    } = this.props;
    
    return <Unit
      type="div"
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
