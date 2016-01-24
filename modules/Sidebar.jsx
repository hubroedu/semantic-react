Sidebar = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "sidebar")} ref="sidebar">
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
        $(this.refs.sidebar).sidebar();
      } else {
        $(this.refs.sidebar).sidebar(this.props.init);
      }
    }
  }
});
