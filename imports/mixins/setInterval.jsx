import React, {PropTypes} from "react";

export default (Inner) => class extends React.Component {
  componentWillMount () {
    this.intervals = [];
  }
  
  setInterval () {
    this.intervals.push(setInterval.apply(null, arguments));
  }
  
  componentWillUnmount () {
    this.intervals.forEach(clearInterval);
  }
  
  stopIntervals () {
    this.intervals.forEach(clearInterval);
  }
  
  render () {
    return <Inner
      {...this.props}
      stopIntervals={this.stopIntervals}
      setInterval={this.setInterval} />;
  }
};
