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
      ...other
    } = this.props;
    
    let menu = null;
    let open = this.state.opened;
    
    if (open) {
      menu = (
        <Menu className="fluid vertical inverted grey" style={menuStyle}>
          {children}
        </Menu>
      );
    }
    
    if (collapsed) {
      return (
        <div className={this.getClasses("ui", "item", "dropdown-item")}>
          <div className="item-linker" onClick={this.toggleOpen}>
            <Icon icon={open ? "chevron down" : "chevron right"} />
          </div>
          
          {menu}
        </div>
      ); 
    }
    
    return (
      <div className={this.getClasses("ui", "item", "dropdown-item")}>
        <div className="item-linker" onClick={this.toggleOpen}>
          <Icon icon={open ? "chevron down" : "chevron right"} />
          <div className="item-header">
            {label}
          </div>
        </div>
        
        {menu}
      </div>
    );
  }
});
