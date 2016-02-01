Card = React.createClass({
  
  mixins: [Mixins.classGenerator],
  
  render() {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.getClasses("ui card")}>
      {this.props.children}
    </div>;
  }
});
