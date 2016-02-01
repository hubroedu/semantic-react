Right = React.createClass({
  mixins: [Mixins.classGenerator],

  render () {
    let {className, children, ...other} = this.props;
    let style = {
      float: "right"
    };
    
    return (
      <div {...other} style={style} className={this.getClasses("right")}>
        {children}
      </div>
    );
  }
});
