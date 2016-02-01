DropdownItem = React.createClass({
  mixins: [Mixins.classGenerator],
  
  propTypes: {
    label: React.PropTypes.any.isRequired,
  },
  
  getInitialState () {
    return {
      opened: false
    }
  },
  
  toggleOpen () {
    this.setState({ opened: !this.state.opened });
  },
  
  render() {
    let {
      label,
      children,
      collapsed,
      menuStyle,
      icon,
      ...other
    } = this.props;
    
    let open = this.state.opened;
    
    let menu = (
      <Menu
        className={(open ? "open" : "") +" fluid vertical inverted grey"}
        style={menuStyle}>
        
        {children}
      </Menu>
    );
  
    if (collapsed) {
      return (
        <div className={this.getClasses("ui", "item", "dropdown-item")}>
          <div className="item-linker" onClick={this.toggleOpen}>
            <Icon icon={icon} />
          </div>
          
          {menu}
        </div>
      ); 
    }
    
    return (
      <div className={this.getClasses("ui", "item", "dropdown-item")}>
        <div className="item-linker" onClick={this.toggleOpen}>
          <div className="item-header">
            {icon ? <Icon icon={icon} /> : null}
            {label}
          </div>
          <Icon
            icon={open ? "chevron down" : "chevron right"} />
        </div>
        
        {menu}
      </div>
    );
  }
});
