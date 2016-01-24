Dimmer = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, color, type, disabled, active, ...other} = this.props;

    return (
      <Unit
        className={this.getClasses("ui", "dimmer")}
        color="null"
        type="div"
        disabled={this.getDisabled()}
        active={this.getActive()}>
        {this.props.children}
      </Unit>
    );
  },

  componentDidMount () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(ReactDOM.findDOMNode(this)).dimmer();
      } else {
        $(ReactDOM.findDOMNode(this)).dimmer(this.props.init);
      }
    }
  }
});
