Header = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.colorSelector, Mixins.typeSelector, Mixins.stateSelector],

  render () {

    let {className, type, children, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "header")}
        type={this.getType()}
        color={this.getColor()}
        disabled={this.getDisabled()}>
        {children}
      </Unit>
    );
  }
});

SubHeader = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, children, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("sub", "header")}>
        {children}
      </div>
    );
  }
});
