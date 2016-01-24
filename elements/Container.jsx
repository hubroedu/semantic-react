Container = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "container")}>
        {children}
      </div>
    );
  }
});
