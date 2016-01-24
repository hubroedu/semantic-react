Flag = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, type, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("flag")}
        type="icon"
        color="null">
      </Unit>
    );
  }
});
