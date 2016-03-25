import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Modal = class extends React.Component {
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

    $(ReactDOM.findDOMNode(this)).modal(opts);
  }
  
  render () {
    let {className, color, type, active, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.props.getClasses("ui", "modal")}
        color="null"
        type="div"
        active={this.props.getActive()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Modal));
