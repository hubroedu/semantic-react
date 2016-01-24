Card = React.createClass({
  
  mixins: [Mixins.classGenerator],
  
  renderIcon() {
    return <div className="image">
      <RPGIcon icon={this.props.icon} centered={true} size="large" />
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
    return <div className="extra content">
      {this.props.extra}
    </div>
  },
  
  renderContent () {
    let props = this.props;
    
    return <div className="content">
      {props.header ? this.renderHeader() : ""}
      {props.meta ? this.renderMeta() : ""}
      {props.description ? this.renderDescription() : ""}
    </div>
  },
  
  renderContentInline () {
    let props = this.props;
    
    return <div className="content">
      <Grid>
        <Column className="six wide">
          <RPGIcon icon={props.inlineIcon} />
        </Column>
        <Column className="ten wide">
          {props.header ? this.renderHeader() : ""}
          {props.meta ? this.renderMeta() : ""}
          {props.description ? this.renderDescription() : ""}
        </Column>
      </Grid>
    </div>
  },
  
  
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("ui card")}>
      {props.icon ? this.renderIcon() : ""}
      
      {props.inlineIcon ? this.renderContentInline() : this.renderContent()}
      
      {props.extra ? this.renderExtra() : ""}
    </div>;
  }
});
