Divider = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {
    return (
      <div className={this.getClasses("ui", "divider")}>
        {this.props.children}
      </div>
    );
  }
});
