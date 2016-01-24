Items = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    return <div className={this.getClasses("ui items")}>
      {this.props.children}
    </div>;
  }
});
