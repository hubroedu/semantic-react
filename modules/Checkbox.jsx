Checkbox = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, color, type, disabled, readOnly, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "checkbox")}
        color="null"
        type="div"
        disabled={this.getDisabled()}
        readOnly={this.getReadOnly()}>
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
        $(ReactDOM.findDOMNode(this)).checkbox();
      } else {
        $(ReactDOM.findDOMNode(this)).checkbox(this.props.init);
      }
    }
  }
});
