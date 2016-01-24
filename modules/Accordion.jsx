Accordion = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {
    return (
      <div
        className={this.getClasses("ui", "accordion")}
        ref="accordion"
      >
        {this.props.children}
      </div>
    );
  },

  componentDidMount () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.accordion).accordion();
      } else {
        $(this.refs.accordion).accordion(this.props.init);
      }
    }
  }
});
