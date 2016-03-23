Shape = class extends React.Component {

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "shape")} ref="shape">
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
        $(this.refs.shape).shape();
      } else {
        $(this.refs.shape).shape(this.props.init);
      }
    }
  }
});
