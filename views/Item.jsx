Item = React.createClass({
  mixins: [Mixins.classGenerator, Mixins.typeSelector],
  
  hasContent () {
    let props = this.props;
    return props.header || props.meta || props.description || props.extra;
  },
  
  renderIcon () {
    return <div className="image">
      <RPGIcon icon={this.props.icon} size="large" />
    </div>
  },
  
  renderMeta () {
    return <div className="meta">{this.props.meta}</div>
  },
  
  renderHeader () {
    return <a className="header">{this.props.header}</a>
  },
  
  renderDescription () {
    return <div className="description">
      {this.props.description}
    </div>
  },
  
  renderExtra () {
    return <div className="extra">
      {this.props.extra}
    </div>
  },
  
  renderContent () {
    let props = this.props;
    return <div className="content">
      {props.header ? this.renderHeader() : ""}
      {props.meta ? this.renderMeta() : ""}
      {props.description ? this.renderDescription() : ""}
      {props.extra ? this.renderExtra() : ""}
    </div>
  },
  
  renderRight () {
    return <div className="right floated content">
      {this.props.right}
    </div>
  },
  
  render() {
    let props = this.props;
    let {className, type, ...other} = props;

    if (typeof props.type != 'undefined') {
      if (props.type == 'link') {
        type = 'link';
      }
    }
    
    let defaultClassName = "item";
    if (this.hasContent()) {
      defaultClassName = "ui item";
    }
    
    return (
      <Unit {...other}
        className={this.getClasses(defaultClassName)}
        type={this.getType()}
        color="null"
        value={this.props.value} >

        {props.icon ? this.renderIcon() : ""}
        {props.right ? this.renderRight() : ""}
        {this.hasContent() ? this.renderContent() : this.props.children}
      </Unit>
    );
  }
});
