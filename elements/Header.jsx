Header = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.colorSelector, Mixins.typeSelector, Mixins.stateSelector],

  render () {

    let {className, type, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "header")}
        type={this.getType()}
        color={this.getColor()}
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
});
