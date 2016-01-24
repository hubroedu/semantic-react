Buttons = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let {
      className,
      ...others
    } = this.props;
    
    return <div {...others} className={this.getClasses("ui", "buttons")}>
      {this.props.children}
    </div>;
  }
});
