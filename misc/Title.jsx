Title = React.createClass({
  mixins: [Mixins.classGenerator],

  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("title")}>
        {children}
      </div>
    );
  }
});