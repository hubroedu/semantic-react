Segment = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.colorSelector, Mixins.stateSelector],

  render () {

    let {className, children, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "segment")}
        type="div"
        color={this.getColor()}
        disabled={this.getDisabled()}
        loading={this.getLoading()}>
        
        {children}
      </Unit>
    );
  }
});
