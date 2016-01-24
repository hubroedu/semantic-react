List = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    return <div className={this.getClasses("ui", "list")}>
      {this.props.children}
    </div>;
  }
});
