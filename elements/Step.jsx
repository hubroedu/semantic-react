Step = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("step")}
        type="div"
        color="null"
        active={this.getActive()}
        completed={this.getCompleted()}
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
});
