Segments = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "segments")} >
        {this.props.children}
      </div>
    );
  }
});
