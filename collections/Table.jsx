Table = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <table {...other} className={this.getClasses("ui", "table")} >
        {this.props.children}
      </table>
    );
  }
});
