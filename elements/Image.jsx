Image = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render () {

    let {className, type, disabled, src, ...other} = this.props;
    let uiClass = "";
    
    if (src) {
      type = "img";
      uiClass = "ui";
    } else {
      type = "div";
    }
    
    
    
    return (
      <Unit {...other}
        src={src}
        className={this.getClasses(uiClass, "image")}
        type={type}
        color="null"
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
});
