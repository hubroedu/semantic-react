Fields = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("fields")}>
      {this.props.children}
    </div>;
  }
});
