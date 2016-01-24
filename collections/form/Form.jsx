Form = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let {
      children,
      className,
      ...others
    } = this.props;
    
    return <form {...others} className={this.getClasses("ui", "form")}>
      {children}
    </form>;
  }
});


