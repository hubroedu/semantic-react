Search = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, color, type, active, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "search")}
        color="null"
        type="div"
        loading={this.getLoading()}>
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
        $(ReactDOM.findDOMNode(this)).search();
      } else {
        $(ReactDOM.findDOMNode(this)).search(this.props.init);
      }
    }
  }
});
