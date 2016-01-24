Field = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("field")}>
      {this.props.children}
    </div>;
  }
});