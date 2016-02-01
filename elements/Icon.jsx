Icon = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.colorSelector, Mixins.stateSelector],

  render () {

    let {className, icon, color, ...other} = this.props;

    return (
      <i {...other}
        className={this.getClasses("icon") + " " + icon}
        type="icon"
        color={this.getColor()}
        disabled={this.getDisabled()}
        loading={this.getLoading()} />
    );
  }
});