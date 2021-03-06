import _ from "lodash";
import moment from "moment";
import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Progress = class extends React.Component {
  
  constructor (props) {
    super(props);
    
    this.state = {
      percent: props.percent || 100 * props.value / props.total,
      label: ""
    };
  }
  
  componentDidMount () {
    const opts = { showActivity: false };
    if (typeof this.props.init !== 'undefined') {
      if (this.props.init === false) {
        return;
      }
      
      if (this.props.init === true) {
        $(this.refs.progress).progress(opts);
      } else {
        $(this.refs.progress).progress({
          ...opts,
          ...this.props.init
        });
      }
    } else {
      $(this.refs.progress).progress(opts);
    }
    
    if (!_.isUndefined(this.props.timeFrom) && !_.isUndefined(this.props.timeTo)) {
      this.setInterval(this.tick, 1000);
    }
  }
  
  componentDidUpdate (prevProps, prevState) {
    let props = this.props;
    if (prevProps.value !== props.value || prevProps.total !== props.total) {
      $(this.refs.progress).progress({ total: props.total, value: props.value });
    }
    if (props.percent !== prevProps.percent) {
      $(this.refs.progress).progress({ percent: props.percent });
    }
  }
  
  tick () {
    let timeFrom = this.props.timeFrom;
    let timeTo = this.props.timeTo;
    let timeNow = new Date();
    let totalSecDiff = (timeTo - timeFrom) / 1000;
    let currentSecDiff = (timeTo - timeNow) / 1000;
    let percent = Math.floor(100 - (currentSecDiff / totalSecDiff) * 100);
    percent = U.clamp(percent, 0, 100);
    
    this.setState({ percent });
    $(this.refs.progress).progress({ percent });
    
    if (percent >= 100) {
      this.stopIntervals();
    }
    
    if (this.props.showTimeRemaining) {
      if (percent < 100) {
        this.setState({ "label": moment(timeTo).fromNow() });
      } else {
        this.setState({ "label": "complete" });
      }
    }
  }
  
  render () {
    let defaultStyle = {
      marginBottom: (this.props.showTimeRemaining || this.props.label) ? "": "0px"
    };
    
    let {
      className,
      style,
      value, total,
      active, success, warning, error, disabled,
      ...other
    } = this.props;
    
    if (style) {
      style = _.extend(style, defaultStyle);
    } else {
      style = defaultStyle;
    }

    let barStyle = {
      width: this.state.percent + "%"
    };
    
    const classes = this.props.getClasses("ui progress");
    
    return (
      <div {...other}
        style={style}
        className={classes}
        data-percent={this.state.percent}
        data-value={value}
        data-total={total}
        ref="progress">
        
        <div className="bar" style={barStyle}></div>
        <div className="label">
          {this.props.label}
          {this.state.label}
        </div>
      </div>
    );
  }
};

Progress.propTypes = {
  tab: PropTypes.string,
};

export default classGenerator(Progress);
