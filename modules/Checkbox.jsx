import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Checkbox = class extends React.Component {

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

    $(ReactDOM.findDOMNode(this)).checkbox(opts);
  }

  render () {
    let {className, color, type, disabled, readOnly, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClasses("ui", "checkbox")}
        color="null"
        type="div"
        disabled={this.getDisabled()}
        readOnly={this.getReadOnly()}>
        {this.props.children}
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Checkbox));
