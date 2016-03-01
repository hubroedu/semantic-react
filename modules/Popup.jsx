Popup = React.createClass({
  mixins: [
    Mixins.classGenerator,
  ],

  componentDidMount () {
    let popup = $(this.refs.pop);
    let container = popup.parent();
    
    container.popup({
      popup,
    });
  },

  render () {
    return (
      <div ref="pop" className={this.getClasses("ui", "popup")} >
        {this.props.children}
      </div>
    );
  }
});
