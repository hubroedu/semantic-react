Card = class extends React.Component {
  
  mixins: [Mixins.classGenerator],
  
  render () {
    let {
      type,
      className,
      ...other
    } = this.props;
    
    if (type === "link") {
      return <a {...other} className={this.getClasses("ui card")}>
        {this.props.children}
      </a>;
    }
    
    return <div {...other} className={this.getClasses("ui card")}>
      {this.props.children}
    </div>;
  }
});
