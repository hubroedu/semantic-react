TabMenu = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  mixins: [Mixins.classGenerator],
  
  componentDidMount() {
      $('.menu .item').tab();
  },
  
  render() {
    return <div className={this.getClasses("ui", "menu")}>
      {this.props.children}
    </div>;
  }
});