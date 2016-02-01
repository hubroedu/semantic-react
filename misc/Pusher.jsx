Pusher = React.createClass({
  mixins: [Mixins.classGenerator],

  render () {
    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("pusher")}>
        {children}
      </div>
    );
  }
});
