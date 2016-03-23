Feed = class extends React.Component {

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "feed")} >
        {this.props.children}
      </div>
    );
  }
});
