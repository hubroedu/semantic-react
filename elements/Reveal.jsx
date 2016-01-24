Reveal = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "reveal")}
        type="div"
        color="null"
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
});
