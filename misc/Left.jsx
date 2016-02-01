Left = React.createClass({
  mixins: [Mixins.classGenerator],

  render () {
    let {className, children, ...other} = this.props;
    let style = {
      float: "left"
    };
    
    return (
      <div {...other} style={style} className={this.getClasses("left")}>
        {children}
      </div>
    );
  }
});
