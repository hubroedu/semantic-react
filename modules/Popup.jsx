Popup = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {
    return (
      <div className={this.getClasses("ui", "popup")} >
        {this.props.children}
      </div>
    );
  }
});
