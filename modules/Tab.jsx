Tab = React.createClass({
  mixins: [Mixins.classGenerator, Mixins.stateSelector],
  
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  render() {
    return <a className={(this.props.active?"active ":"")+"item"} data-tab={this.props.tab}>
      {this.props.children}
    </a>;
  }
});

