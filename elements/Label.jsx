Label = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.colorSelector, Mixins.typeSelector],

  render () {
    let {className, type, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "label")}
        type={this.getType()}
        color={this.getColor()}>
        {this.props.children}
      </Unit>
    );
  }
});
