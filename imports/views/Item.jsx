import React, {PropTypes} from "react";
import { classGenerator, typeSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

const Item = class extends React.Component {
  hasContent () {
    let props = this.props;
    return props.header || props.meta || props.description || props.extra;
  }
  
  renderIcon () {
    return <div className="image">
      <RPGIcon icon={this.props.icon} size="large" />
    </div>;
  }
  
  renderMeta () {
    return <div className="meta">{this.props.meta}</div>;
  }
  
  renderHeader () {
    return <a className="header">{this.props.header}</a>;
  }
  
  renderDescription () {
    return <div className="description">
      {this.props.description}
    </div>;
  }
  
  renderExtra () {
    return <div className="extra">
      {this.props.extra}
    </div>;
  }
  
  renderContent () {
    let props = this.props;
    return <div className="content">
      {props.header ? this.renderHeader() : ""}
      {props.meta ? this.renderMeta() : ""}
      {props.description ? this.renderDescription() : ""}
      {props.extra ? this.renderExtra() : ""}
    </div>;
  }
  
  renderRight () {
    return <div className="right floated content">
      {this.props.right}
    </div>;
  }
  
  render () {
    let props = this.props;
    let {className, collapsed, type, ...other} = props;

    if (typeof props.type != 'undefined') {
      if (props.type == 'link') {
        type = 'link';
      }
    }
    
    let defaultClassName = "item";
    if (this.hasContent()) {
      defaultClassName = "ui item";
    }
    
    if (collapsed) {
      return (
        <Unit {...other}
          className={this.props.getClasses(defaultClassName)}
          type={this.props.getType()}
          color="null"
          value={this.props.value} >

          {props.icon ? this.renderIcon() : null}
          {this.props.children}
        </Unit>
      );
    }
    
    return (
      <Unit {...other}
        className={this.props.getClasses(defaultClassName)}
        type={this.props.getType()}
        color="null"
        value={this.props.value} >

        {props.icon ? this.renderIcon() : null}
        {props.right ? this.renderRight() : null}
        {this.hasContent() ? this.renderContent() : this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(typeSelector(Item));
