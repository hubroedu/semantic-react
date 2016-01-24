Comment = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("comment")} >
        {this.props.children}
      </div>
    );
  }
});
