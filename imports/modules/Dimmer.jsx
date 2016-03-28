import _ from "lodash";
import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import { classGenerator, stateSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

const Dimmer = class extends React.Component {
  
  componentDidMount () {
    let opts = {};
    
    if (typeof this.props.init !== 'undefined') {
      if (this.props.init === false) {
        return;
      }
      
      if (typeof this.props.init === 'object') {
        opts = _.extend(opts, this.props.init);
      }
    }
    
    if (this.props.onChange) {
      opts.onChange = (value, label, el) => {
        let name = this.props.name;
        this.props.onChange(name, value, el);
      };
    }

    $(ReactDOM.findDOMNode(this)).dimmer(opts);
  }
  
  render () {
    let {className, color, type, disabled, active, ...other} = this.props;

    return (
      <Unit
        className={this.props.getClasses("ui", "dimmer")}
        color="null"
        type="div"
        disabled={this.props.getDisabled()}
        active={this.props.getActive()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Dimmer));
