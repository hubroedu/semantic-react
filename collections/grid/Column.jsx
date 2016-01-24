Column = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.getClasses("", "column")}>
      {this.props.children}
    </div>;
  }
});