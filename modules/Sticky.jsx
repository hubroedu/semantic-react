Sticky = React.createClass({
  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "sticky")} >
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
        $(this.getDOMNode()).sticky();
      } else {
        $(this.getDOMNode()).sticky(this.props.init);
      }
    }
  }
});
