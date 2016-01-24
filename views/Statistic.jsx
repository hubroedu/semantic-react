
Statistic = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("ui", "statistic")}>
      <div className="value">
        {props.value}
      </div>
      <div className="label">
        {props.label}
      </div>
    </div>;
  }
});
