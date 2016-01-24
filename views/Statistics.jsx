Statistics = React.createClass({
    
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("ui", "statistics")}>
      {this.props.children}
    </div>;
  }
});
