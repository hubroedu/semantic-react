import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

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
        className={this.getClasses("ui", "dimmer")}
        color="null"
        type="div"
        disabled={this.getDisabled()}
        active={this.getActive()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Dimmer));
