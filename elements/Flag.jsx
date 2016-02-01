Flag = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, type, flag, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("flag", flag)}
        type="icon"
        color="null">
      </Unit>
    );
  }
});
