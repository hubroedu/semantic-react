Image = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, type, disabled, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "image")}
        type="img"
        color="null"
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
});
