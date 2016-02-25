Form = React.createClass({
  mixins: [Mixins.classGenerator],
  
  handleSubmit (e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.preventDefault();
    
    if (this.props.onSubmit) {
      this.props.onSubmit(e);
    }
    
    return false;
  },
  
  render() {
    let {
      children,
      className,
      onSubmit,
      ...others
    } = this.props;
    
    return (
      <form
        {...others}
        onSubmit={this.handleSubmit}
        className={this.getClasses("ui", "form")}>
        
        {children}
      </form>
    );
  }
});


