Cards = React.createClass({
  
  mixins: [Mixins.classGenerator],
  
  render() {
    return <div className={this.getClasses("ui cards")}>
      {this.props.children}
    </div>;
  }
});
