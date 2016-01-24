Modal = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, color, type, active, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "modal")}
        color="null"
        type="div"
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
        $(ReactDOM.findDOMNode(this)).modal();
      } else {
        $(ReactDOM.findDOMNode(this)).modal(this.props.init);
      }
    }
  }
});
