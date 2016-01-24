Loader = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "loader")}
        type="div"
        color="null"
        disabled={this.getDisabled()}
        active={this.getActive()}>
        {this.props.children}
      </Unit>
    );
  }
});
