Steps = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "steps")} >
        {this.props.children}
      </div>
    );
  }
});
