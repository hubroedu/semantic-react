
TabContent = class extends React.Component {
  mixins: [Mixins.classGenerator, Mixins.stateSelector],
  
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  render () {
    let {
      className,
      active,
      tab,
      ...other
    } = this.props;
    
    let state = {
      active: this.getActive(),
    }
    
    return  <div {...other}
        data-tab={tab}
        className={this.getClasses("ui tab", state)}>
        
        {this.props.children}
      </div>
  }
});
