import _ from "lodash";
import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import { classGenerator } from "../mixins";

const Accordion = class extends React.Component {

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

    $(ReactDOM.findDOMNode(this)).accordion(opts);
  }
  
  render () {
    return (
      <div
        className={this.props.getClasses("ui", "accordion")}
        ref="accordion"
      >
        {this.props.children}
      </div>
    );
  }
};

export default classGenerator(Accordion);
