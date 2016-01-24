Rail = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "rail")} >
        {this.props.children}
      </div>
    );
  }
});
