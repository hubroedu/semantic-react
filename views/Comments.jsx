Comments = class extends React.Component {

  mixins: [Mixins.classGenerator],

  render () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClasses("ui", "comments")} >
        {this.props.children}
      </div>
    );
  }
});
